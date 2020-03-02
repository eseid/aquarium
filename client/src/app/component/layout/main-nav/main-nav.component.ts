import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {EventManagerService} from '../../../services/event-manager.service';
import {Nav} from '../../../utils/nav.entitie';
import {ADMIN_MENU, EMPLOYEE_MENU, RESPONSABLE_MENU, VISITOR_MENU} from '../../../utils/app.const';
import {Router} from '@angular/router';
import {Personal} from '../../../entities/personal.entitie';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isNavbarCollapsed: boolean;
  navBarLinks: Nav[];
  userName: string;

  constructor(
    public accountService: AccountService,
    private eventManager: EventManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isNavbarCollapsed = true;
    this.navBarLinks = VISITOR_MENU;
    this.setNavMenu();
    this.subscribeLoginEvent();
    this.getUserName();
  }


  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  subscribeLoginEvent() {
    this.eventManager.subscribe('login-event', () => {
      this.setNavMenu();
      this.getUserName();
    });
  }

  getUserName() {
    if (this.accountService.isAuthenticated()) {
      this.userName = `${this.accountService.getCurrentUser().currentUser.lastName}`;
    }
  }

  setNavMenu() {
    if (this.accountService.isAdmin()) {
      this.navBarLinks = ADMIN_MENU;
    } else if (this.accountService.isEmployee()) {
      this.navBarLinks = EMPLOYEE_MENU;
    } else if (this.accountService.isResponsable()) {
      this.navBarLinks = RESPONSABLE_MENU;
    } else {
      this.navBarLinks = VISITOR_MENU;
    }
  }

  logout() {
    this.accountService.logout();
    this.router.navigate['/'];
    this.ngOnInit();
  }

}
