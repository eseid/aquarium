import { Component, OnInit } from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {AnimalService} from '../../../../services/animal.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Router} from '@angular/router';
import {AnimalFormComponent} from '../../animals-management/animal-form/animal-form.component';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {DeleteConfirmComponent} from '../../animals-management/delete-confirm/delete-confirm.component';
import {Personal} from '../../../../entities/personal.entitie';
import {PersonalService} from '../../../../services/personal.service';
import {PersonalFormComponent} from '../personal-form/personal-form.component';

@Component({
  selector: 'app-personals-list',
  templateUrl: './personals-list.component.html',
  styleUrls: ['./personals-list.component.css']
})
export class PersonalsListComponent implements OnInit {


  listOfPersonal: Personal[];
  columnLabels: string[];

  constructor(
    private personalService: PersonalService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.listOfPersonal = [];
    this.columnLabels = ['#', 'Prénom', 'Nom', 'Sexe', 'Adresse', 'Date de naissance', 'N° de Sécurité Social'];
  }

  ngOnInit() {
    this.findAllPersonals();
    this.subscribeRefreshListEvent();
  }

  findAllPersonals() {
    this.personalService.findAll().subscribe(response => {
      this.listOfPersonal = response.body;
    });
  }

  openPersonalForm(personal?) {
    const modalRef = this.modalService.open(PersonalFormComponent, MODAL_OPTIONS);
    if (personal) {
      modalRef.componentInstance.personal = personal;
    } else {
      modalRef.componentInstance.personal = new Personal();
    }
  }

  navigateToDetails(personal: Personal) {
    const detailsURL = `personals-management/personal-details/${personal.id}`;
    this.router.navigate([detailsURL]);
  }

  deletePersonal(personal: Personal) {
    const modalRef = this.modalService.open(DeleteConfirmComponent, MODAL_OPTIONS);
    modalRef.componentInstance.animal = personal;
  }

  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-personals-list', event => {
      if (event) {
        const personal: Personal = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfPersonal.push(personal);
        } else if (event.content.action === 'update') {
          this.updateItem(personal);
        } else if (event.content.action === 'delete') {
          this.deleteItem(personal);
        }
      }
    });
  }

  updateItem(newItem) {
    const updateItem = this.listOfPersonal.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfPersonal.indexOf(updateItem);
    this.listOfPersonal[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfPersonal.find(this.findIndexToUpdate, item.id);
    const index = this.listOfPersonal.indexOf(searchedItem);
    this.listOfPersonal.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
