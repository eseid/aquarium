import { Component, OnInit } from '@angular/core';
import {Animal} from '../../../entities/animal.entitie';
import {AnimalService} from '../../../services/animal.service';
import {NgbModal, NgbToast} from '@ng-bootstrap/ng-bootstrap';
import {AnimalFormComponent} from '../animal-form/animal-form.component';
import {MODAL_OPTIONS} from '../../../utils/app.const';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  listOfAnimals: Animal[];
  columnLabels: string[];

  constructor(private animalService: AnimalService, private modalService: NgbModal) {
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

  private openAnimalForm(animal: Animal) {
    const modalRef = this.modalService.open(AnimalFormComponent, MODAL_OPTIONS);
    if (animal) {
      modalRef.componentInstance.animal = animal;
    } else {
      modalRef.componentInstance.animal = new Animal();
    }
  }

  private deleteAnimal(animal: Animal) {
    if (this.animalService.deleteById(animal.id)) {
        console.log("deleted");
    } else {
        console.log("not deleted");
    }
  }
}
