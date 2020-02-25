import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AnimalFormComponent} from '../animal-form/animal-form.component';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';
import {Router} from '@angular/router';
import {Animal} from '../../../../entities/animal.entitie';
import {AnimalService} from '../../../../services/animal.service';
import {EventManagerService} from '../../../../services/event-manager.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  listOfAnimals: Animal[];
  columnLabels: string[];

  constructor(
    private animalService: AnimalService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.listOfAnimals = [];
    this.columnLabels = ['#', 'name', 'sexe', 'signe destictif', 'date d\'entrée', 'date de sortie'];
  }

  ngOnInit() {
    this.findAllAnimals();
    this.subscribeRefreshListEvent();
  }

  findAllAnimals() {
    this.animalService.findAll().subscribe(response => {
      this.listOfAnimals = response.body;
    });
  }

  openAnimalForm(animal?) {
    const modalRef = this.modalService.open(AnimalFormComponent, MODAL_OPTIONS);
    if (animal) {
      modalRef.componentInstance.animal = animal;
    } else {
      modalRef.componentInstance.animal = new Animal();
    }
  }

  navigateToDetails(animal: Animal) {
    const detailsURL = `animals-management/animal-details/${animal.id}`;
    this.router.navigate([detailsURL]);
  }

  deleteAnimal(animal: Animal) {
    const modalRef = this.modalService.open(DeleteConfirmComponent, MODAL_OPTIONS);
    modalRef.componentInstance.animal = animal;
  }

  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-animals-list', event => {
      if (event) {
        const animal: Animal = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfAnimals.push(animal);
        } else if (event.content.action === 'update') {
          this.updateItem(animal);
        } else if (event.content.action === 'delete') {
          this.deleteItem(animal);
        }
      }
    });
  }

  updateItem(newItem) {
    const updateItem = this.listOfAnimals.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfAnimals.indexOf(updateItem);
    this.listOfAnimals[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfAnimals.find(this.findIndexToUpdate, item.id);
    const index = this.listOfAnimals.indexOf(searchedItem);
    this.listOfAnimals.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
