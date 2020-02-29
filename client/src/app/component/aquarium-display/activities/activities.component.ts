import { Component, OnInit } from '@angular/core';
import {Pool} from '../../../entities/pool.entitie';
import {PoolService} from '../../../services/pool.service';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  listOfActivity: Activity[];

  constructor(
    private activityService: ActivityService,
  ) { }

  ngOnInit() {
    this.getAllSectors()
  }

  getAllSectors(){
    this.activityService.findAll().subscribe(response => {
      this.listOfActivity = response.body;
    });
  }

}
