import { Component, OnInit } from '@angular/core';
import {Pool} from "../../../entities/pool.entitie";
import {PoolService} from "../../../services/pool.service";
import {Animal} from "../../../entities/animal.entitie";
import {AnimalService} from "../../../services/animal.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  listOfAnimal: Animal[];

  constructor(
    private animalService: AnimalService,
  ) { }

  ngOnInit() {
    this.getAllSectors()
  }

  getAllSectors(){
    this.animalService.findAll().subscribe(response => {
      this.listOfAnimal = response.body;
    });
  }
}
