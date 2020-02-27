import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Router} from '@angular/router';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {ActivityService} from '../../../../services/activity.service';
import {Activity} from '../../../../entities/activity.entitie';
import {ActivityFormComponent} from '../activity-form/activity-form.component';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  listOfActivity: Activity[];
  columnLabels: string[];

  constructor(
    private activityService: ActivityService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.listOfActivity = [];
    this.columnLabels = ['#', 'Type', 'Date', 'Ouvert au publique', 'Description'];
  }

  ngOnInit() {

    this.findAllActivities();
    this.subscribeRefreshListEvent();
  }

  findAllActivities() {
    this.activityService.findAll().subscribe(response => {
      this.listOfActivity = response.body;
    });
  }

  openActivityForm(activity?) {
    const modalRef = this.modalService.open(ActivityFormComponent, MODAL_OPTIONS);
    if (activity) {
      modalRef.componentInstance.activity = activity;
    } else {
      modalRef.componentInstance.activity = new Activity();
    }
  }

  deleteActivity(activity: Activity) {
    const modalRef = this.modalService.open(DeleteConfirmComponent, MODAL_OPTIONS);
    modalRef.componentInstance.activity = activity;
  }

  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-activity-list', event => {
      if (event) {
        const activity: Activity = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfActivity.push(activity);
        } else if (event.content.action === 'update') {
          this.updateItem(activity);
        } else if (event.content.action === 'delete') {
          this.deleteItem(activity);
        }
      console.log(activity);
      }
    });
  }

  updateItem(newItem) {
    const updateItem = this.listOfActivity.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfActivity.indexOf(updateItem);
    this.listOfActivity[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfActivity.find(this.findIndexToUpdate, item.id);
    const index = this.listOfActivity.indexOf(searchedItem);
    this.listOfActivity.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
