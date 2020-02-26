import { Component, OnInit } from '@angular/core';
import {Sector} from '../../../../entities/sector.entitie';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Router} from '@angular/router';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {Species} from '../../../../entities/species.entitie';
import {SpeciesService} from '../../../../services/species.service';
import {SpeciesFormComponent} from '../species-form/species-form.component';
import {Animal} from '../../../../entities/animal.entitie';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {


  listOfSpecies: Species[];
  columnLabels: string[];

  constructor(
    private speciesService: SpeciesService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.columnLabels = ['#', 'nom', 'Espérance de vie', 'Régime', 'Menace', 'niveau de menace'];
  }

  ngOnInit() {
    this.findAllSpecies();
    this.subscribeRefreshListEvent();
  }

  findAllSpecies() {
    this.speciesService.findAll().subscribe(response => {
      this.listOfSpecies = response.body;
    });
  }

  openSectorForm(species?) {
    const modalRef = this.modalService.open(SpeciesFormComponent, MODAL_OPTIONS);
    if (species) {
      modalRef.componentInstance.species = species;
    } else {
      modalRef.componentInstance.species = new Species();
    }
  }

  openDeleteConfirm(species: Species) {
    const modalRef = this.modalService.open(DeleteConfirmComponent, MODAL_OPTIONS);
    modalRef.componentInstance.species = species;
  }

  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-species-list', event => {
      if (event) {
        const species: Species = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfSpecies.push(species);
        } else if (event.content.action === 'update') {
          this.updateItem(species);
        } else if (event.content.action === 'delete') {
          this.deleteItem(species);
        }
      }
    });
  }


  updateItem(newItem) {
    const updateItem = this.listOfSpecies.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfSpecies.indexOf(updateItem);
    this.listOfSpecies[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfSpecies.find(this.findIndexToUpdate, item.id);
    const index = this.listOfSpecies.indexOf(searchedItem);
    this.listOfSpecies.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
}
