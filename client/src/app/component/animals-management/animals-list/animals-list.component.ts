import { Component, OnInit } from '@angular/core';
import {Animal} from '../../../entities/animal';
import {AnimalService} from '../../../services/animal.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  listOfAnimals: Animal[];
  columnLabels: string[];

  constructor(private animalService: AnimalService) {
    this.listOfAnimals = [];
    this.columnLabels = ['#', 'name', 'sexe', 'destinctive Sign', 'checkin Date', 'checkout Date'];
  }

  ngOnInit() {
    this.findAllAnimals();
  }

  private findAllAnimals() {
    this.animalService.findAll().subscribe(response => {
      this.listOfAnimals = response.body;
      console.log(this.listOfAnimals);
    });
  }
}
