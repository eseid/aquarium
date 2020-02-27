import { Component, OnInit } from '@angular/core';
import {Pool} from '../../../../entities/pool.entitie';
import {ActivatedRoute} from '@angular/router';
import {PoolService} from '../../../../services/pool.service';
import {Personal} from '../../../../entities/personal.entitie';
import {PersonalService} from '../../../../services/personal.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  personal: Personal;

  constructor(
    private activateRoute: ActivatedRoute,
    private personalService: PersonalService
  ) {
    this.personal = new Personal();
  }

  ngOnInit() {
    this.getPersonalDetailsFromRoute();
  }

  getPersonalDetailsFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getPersonalById(param['id']);
    });
  }

  getPersonalById(id: number) {
    this.personalService.findById(id).subscribe(response => this.personal = response.body, error => console.log(error));
  }



}
