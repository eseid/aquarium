import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {PoolService} from '../../../../services/pool.service';
import {Pool} from '../../../../entities/pool.entitie';
import {Router} from '@angular/router';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';
import {Animal} from '../../../../entities/animal.entitie';
import {EventManagerService} from '../../../../services/event-manager.service';
import {AnimalFormComponent} from '../../animals-management/animal-form/animal-form.component';
import {PoolUpdateComponent} from '../pool-update/pool-update.component';

@Component({
  selector: 'app-pools-list',
  templateUrl: './pools-list.component.html',
  styleUrls: ['./pools-list.component.css'],

})
export class PoolsListComponent implements OnInit {

  listOfPools: Pool[];
  columnLabels: string[];

  constructor(
    private poolService: PoolService,
    private modalService: NgbModal,
    private router: Router,
    private eventManager: EventManagerService,
  ) {
    this.columnLabels = ['#', 'name', 'capacity', 'state', 'volume'];
  }

  ngOnInit() {
    this.findAllPools();
    this.subscribeRefreshProductList()
  }

  private findAllPools() {
    this.poolService.findAll().subscribe(response => {
      this.listOfPools = response.body;
      console.log(this.listOfPools);
    });
  }



  deletePool(pool: Pool) {
    const modalRef = this.modalService.open(DeleteConfirmComponent, MODAL_OPTIONS);
    modalRef.componentInstance.pool = pool;
  }

  openPoolForm(pool?) {
    const modalRef = this.modalService.open(PoolUpdateComponent, MODAL_OPTIONS);
    if (pool) {
      modalRef.componentInstance.pool = pool;
    } else {
      modalRef.componentInstance.pool = new Pool();
    }
  }

  navigateToDetails(pool: Pool) {
    const detailsURL = `pools-management/pool-details/${pool.id}`;
    this.router.navigate([detailsURL]);
  }

  subscribeRefreshProductList() {
    this.eventManager.subscribe('refresh-pools-list', event => {
      if (event) {
        const pool: Pool = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfPools.push(pool);
        } else if (event.content.action === 'update') {
          this.updateItem(pool);
        } else if (event.content.action === 'delete') {
          this.deleteItem(pool);
        }
      }
    });
  }

  updateItem(newItem) {
    const updateItem = this.listOfPools.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfPools.indexOf(updateItem);
    this.listOfPools[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfPools.find(this.findIndexToUpdate, item.id);
    const index = this.listOfPools.indexOf(searchedItem);
    this.listOfPools.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
