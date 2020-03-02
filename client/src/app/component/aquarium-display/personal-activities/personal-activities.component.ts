import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';
import {ActivatedRoute} from '@angular/router';
import {PersonalService} from '../../../services/personal.service';
import {Personal} from '../../../entities/personal.entitie';

@Component({
  selector: 'app-personal-activities',
  templateUrl: './personal-activities.component.html',
  styleUrls: ['./personal-activities.component.css']
})
export class PersonalActivitiesComponent implements OnInit {

  listOfActivity: Activity[];
  personal: Personal;

  constructor(
    private personalService: PersonalService,
    private activateRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getActivitiesFromRoute();
  }

  getActivitiesFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getPersonalById(param['id']);
    });
  }

  getPersonalById(id: number) {
    this.personalService.findById(id).subscribe(response => this.personal = response.body, error => console.log(error));
  }

}
