import { Component, OnInit } from '@angular/core';
import {Personal} from '../../../entities/personal.entitie';
import {AccountService} from '../../../services/account.service';
import {EventManagerService} from '../../../services/event-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userLogin: Personal;
  errorMessage: string;
  loading: boolean;

  constructor(
    private accountService: AccountService,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.userLogin = new Personal();
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.accountService.login(this.userLogin).subscribe(response => {
      if (response.body && response.body.accessToken) {
        localStorage.setItem('currentUser', JSON.stringify(response.body));
        this.loading = false;
        this.brodcastLoginEvent();
        this.router.navigate(['/home']);
        const userName = `${response.body.currentUser.firstName} ${response.body.currentUser.lastName}`;
      }
    }, error => {
      this.loading = false;
      this.errorMessage = 'Email ou mot de passe sont incorrects';
    });
  }

  brodcastLoginEvent() {
    this.eventManager.broadcast({ name: 'login-event', content: 'OK' });
  }
}
