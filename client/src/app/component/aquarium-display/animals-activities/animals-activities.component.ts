import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';
import {Animal} from '../../../entities/animal.entitie';
import {AnimalService} from '../../../services/animal.service';

@Component({
  selector: 'app-animals-activities',
  templateUrl: './animals-activities.component.html',
  styleUrls: ['./animals-activities.component.css']
})
export class AnimalsActivitiesComponent implements OnInit {

  listOfActivity: Activity[];
  listOfAnimal: Animal[];

  constructor(
    private activityService: ActivityService,
    private animalService: AnimalService,
  ) { }

  ngOnInit() {
    this.getAllActivities();
    this.getAllAnimals();
  }

  getAllActivities(){
    this.activityService.findAll().subscribe(response => {
      this.listOfActivity = response.body;
    });
  }

  getAllAnimals(){
    this.animalService.findAll().subscribe(response => {
      this.listOfAnimal = response.body;
    });
  }

}
