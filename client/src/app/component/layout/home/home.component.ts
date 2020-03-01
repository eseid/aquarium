import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';
import {Animal} from '../../../entities/animal.entitie';
import {AnimalService} from '../../../services/animal.service';
import {SectorService} from '../../../services/sector.service';
import {Sector} from '../../../entities/sector.entitie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [];
  animalsImages: [];

  listOfActivity: Activity[];
  listOfAnimals: Animal[];
  listOfSectors: Sector[];

  constructor(
    private activityService: ActivityService,
    private animalService: AnimalService,
    private sectorService: SectorService,
  ) { }

  ngOnInit() {
    this.findAllActivities();
    this.findAllSectors();
    this.findAllAnimals();
    this.getThreeImages();
  }

  findAllActivities() {
    this.activityService.findAll().subscribe(response => {
      this.listOfActivity = response.body;
    });
  }

  findAllSectors() {
    this.sectorService.findAll().subscribe(response => {
      this.listOfSectors = response.body;
    });
  }

  findAllAnimals() {
    this.animalService.findAll().subscribe(response => {
      this.listOfAnimals = response.body;
    });
  }

  getThreeImages(){
    this.images.push(this.listOfAnimals[0]);
    this.images.push(this.listOfAnimals[1]);
    this.images.push(this.listOfAnimals[2]);

  }


}
