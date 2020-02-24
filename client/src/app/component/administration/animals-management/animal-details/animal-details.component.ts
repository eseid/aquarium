import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimalService} from '../../../../services/animal.service';
import {Animal} from '../../../../entities/animal.entitie';


@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {

  animal: Animal;

  constructor(
    private activateRoute: ActivatedRoute,
    private animalService: AnimalService
  ) {
    this.animal = new Animal();
  }

  ngOnInit() {
    this.getAnimalDetailsFromRoute();
  }

  getAnimalDetailsFromRoute() {
    this.activateRoute.params.subscribe(param => {
      this.getAnimalById(param['id']);
    });
  }

  getAnimalById(id: number) {
    this.animalService.findById(id).subscribe(response => this.animal = response.body, error => console.log(error));
  }

}
