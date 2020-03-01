import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';
import {Animal} from '../../../entities/animal.entitie';
import {AnimalService} from '../../../services/animal.service';
import {ActivatedRoute} from '@angular/router';
import {PoolService} from '../../../services/pool.service';
import {Pool} from '../../../entities/pool.entitie';

@Component({
  selector: 'app-animals-activities',
  templateUrl: './animals-activities.component.html',
  styleUrls: ['./animals-activities.component.css']
})
export class AnimalsActivitiesComponent implements OnInit {

  listOfAnimal: Animal[];
  pool: Pool;

  constructor(
    private activityService: ActivityService,
    private animalService: AnimalService,
    private poolService: PoolService,
    private activateRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getAnimalsFromRoute();
    this.getActivitiesFromRoute();

  }

  getAnimalsFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getAnimalsByPoolId(param.id);
    });
  }

  getActivitiesFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getPoolById(param.id);
    });
  }

  getPoolById(poolId: number) {
    this.poolService.findById(poolId).subscribe(response => {
      this.pool = response.body;
    },
      error => console.log(error));
  }

  getAnimalsByPoolId(poolId: number) {
    this.poolService.findAllAnimalsByPoolId(poolId).subscribe(response =>{
      this.listOfAnimal = response.body;
    });
}



}
