import { Component, OnInit } from '@angular/core';
import {Animal} from '../../../../entities/animal.entitie';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Router} from '@angular/router';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {Sector} from '../../../../entities/sector.entitie';
import {SectorService} from '../../../../services/sector.service';
import {SectorsFormComponent} from '../sectors-form/sectors-form.component';
import {DeleteFormComponent} from '../delete-form/delete-form.component';

@Component({
  selector: 'app-sectors-list',
  templateUrl: './sectors-list.component.html',
  styleUrls: ['./sectors-list.component.css']
})
export class SectorsListComponent implements OnInit {

  listOfSectors: Sector[];
  columnLabels: string[];

  constructor(
    private sectorService: SectorService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.columnLabels = ['#', 'nom', 'location'];
  }

  ngOnInit() {
    this.findAllAnimals();
    this.subscribeRefreshListEvent();
  }

  findAllAnimals() {
    this.sectorService.findAll().subscribe(response => {
      this.listOfSectors = response.body;
    });
  }

  openSectorForm(sector?) {
    const modalRef = this.modalService.open(SectorsFormComponent, MODAL_OPTIONS);
    if (sector) {
      modalRef.componentInstance.sector = sector;
    } else {
      modalRef.componentInstance.sector = new Sector();
    }
  }

  navigateToDetails(sector: Sector) {
    const detailsURL = `sectors-management/sectors-details/${sector.id}`;
    this.router.navigate([detailsURL]);
  }

  openDeleteConfirm(sector: Sector) {
    const modalRef = this.modalService.open(DeleteFormComponent, MODAL_OPTIONS);
    modalRef.componentInstance.sector = sector;
  }

  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-sectors-list', event => {
      if (event) {
        const sector: Sector = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfSectors.push(sector);
        } else if (event.content.action === 'update') {
          this.updateItem(sector);
        } else if (event.content.action === 'delete') {
          this.deleteItem(sector);
        }
      }
    });
  }

  updateItem(newItem) {
    const updateItem = this.listOfSectors.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfSectors.indexOf(updateItem);
    this.listOfSectors[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfSectors.find(this.findIndexToUpdate, item.id);
    const index = this.listOfSectors.indexOf(searchedItem);
    this.listOfSectors.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
