import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

import {Animal} from "../../../entities/animal.entitie";
import {AnimalService} from "../../../services/animal.service";
import {Pool} from "../../../entities/pool.entitie";
import {Species} from "../../../entities/species.entitie";
import {PoolService} from "../../../services/pool.service";
import {SpeciesService} from '../../../services/species.service';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  @Input() animal: Animal;

  listOfPool: Pool[];
  listOfSpecies: Species[];


  constructor(
    private animalService: AnimalService,
    public activeModal: NgbActiveModal,
    private poolService: PoolService,
    private speciesService: SpeciesService
  ) { }

  ngOnInit() {
    this.getListOfPools();
    this.getListOfSpecies();
    console.log(this.animal);
  }

  getListOfPools() {
    this.poolService.findAll().subscribe(
      response => this.listOfPool = response.body,
      error => console.log(error)
    );
  }

  getListOfSpecies() {
    this.speciesService.findAll().subscribe(
      response => this.listOfSpecies = response.body,
      error => console.log(error)
    );
  }

  save() {
    if (this.animal.id) {
      this.animalService.update(this.animal).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      }, error => console.log(error));
    } else {
      this.animalService.save(this.animal).subscribe(response => {
        console.log(response.body);
        this.activeModal.close();
      }, error => console.log(error));
    }
  }
}
