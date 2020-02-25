import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../../entities/activity.entitie';
import {ActivityService} from '../../../../services/activity.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivtyFormComponent} from '../activty-form/activty-form.component';
import {EventManagerService} from '../../../../services/event-manager.service';
import {Router} from '@angular/router';
import {Sector} from '../../../../entities/sector.entitie';
import {MODAL_OPTIONS} from '../../../../utils/app.const';
import {DeleteActivityConfirmComponent} from '../delete-activity-confirm/delete-activity-confirm.component';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
})
export class ActivitiesListComponent implements OnInit {

  listOfActivities: Activity[];
  columnLabels: string[];

  constructor(
    private activityService: ActivityService,
    private modalService: NgbModal,
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.columnLabels = ['#', 'type', 'activityDate', 'isPublic'];
  }

  ngOnInit() {
    this.subscribeRefreshListEvent();
    this.findAllActivities();
  }

  private findAllActivities() {
    this.activityService.findAll().subscribe(response => {
      this.listOfActivities = response.body;
    });
  }

  private openActivityForm(activity: Activity) {
    const modalRef = this.modalService.open(ActivtyFormComponent);
    if (activity) {
      modalRef.componentInstance.activity = activity;
    } else {
      modalRef.componentInstance.actvity = new Activity();
    }
  }

  navigateToDetails(activity: Activity) {
    const detailsURL = `activities-management/activity-details/${activity.id}`;
    this.router.navigate([detailsURL]);
  }

  openDeleteConfirm(activity: Activity) {
    const modalRef = this.modalService.open(DeleteActivityConfirmComponent, MODAL_OPTIONS);
    modalRef.componentInstance.sector = activity;
  }

  subscribeRefreshListEvent() {
    this.eventManager.subscribe('refresh-sectors-list', event => {
      if (event) {
        const activity: Activity = JSON.parse(JSON.stringify(event.content.data));
        if (event.content.action === 'add') {
          this.listOfActivities.push(activity);
        } else if (event.content.action === 'update') {
          this.updateItem(activity);
        } else if (event.content.action === 'delete') {
          this.deleteItem(activity);
        }
      }
    });
  }

  updateItem(newItem) {
    const updateItem = this.listOfActivities.find(this.findIndexToUpdate, newItem.id);
    const index = this.listOfActivities.indexOf(updateItem);
    this.listOfActivities[index] = newItem;
  }

  deleteItem(item) {
    const searchedItem = this.listOfActivities.find(this.findIndexToUpdate, item.id);
    const index = this.listOfActivities.indexOf(searchedItem);
    this.listOfActivities.splice(index, 1);
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}
