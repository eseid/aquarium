import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Router} from '@angular/router';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {Role} from '../../../../entities/role.entitie';
import {RoleService} from '../../../../services/role.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {


  listOfRoles: Role[];
  columnLabels: string[];

  constructor(
    private roleService: RoleService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.columnLabels = ['#', 'Nom du role'];
  }

  ngOnInit() {
    this.findAllRoles();
    this.subscribeRefreshListEvent();
  }

  findAllRoles() {
    this.roleService.findAll().subscribe(response => {
      this.listOfRoles = response.body;
    });
  }

  openSectorForm(role?) {
    const modalRef = this.modalService.open(, MODAL_OPTIONS);
    if (role) {
      modalRef.componentInstance.species = role;
    } else {
      modalRef.componentInstance.species = new Role();
    }
  }



  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-roles-list', event => {
      if (event) {
        const role: Role = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfRoles.push(role);
        } else if (event.content.action === 'update') {
          this.updateItem(role);
        } else if (event.content.action === 'delete') {
          this.deleteItem(role);
        }
      }
    });
  }


  updateItem(newItem) {
    const updateItem = this.listOfRoles.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfRoles.indexOf(updateItem);
    this.listOfRoles[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfRoles.find(this.findIndexToUpdate, item.id);
    const index = this.listOfRoles.indexOf(searchedItem);
    this.listOfRoles.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
