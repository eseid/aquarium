import { Component, OnInit } from '@angular/core';
import {Activity} from '../../../entities/activity.entitie';
import {ActivityService} from '../../../services/activity.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {MatTableDataSource} from '@angular/material/table';
import {Animal} from '../../../entities/animal.entitie';
import {AnimalFormComponent} from '../../animals-management/animal-form/animal-form.component';
import {MODAL_OPTIONS} from '../../../utils/app.const';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivtyFormComponent} from '../activty-form/activty-form.component';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ActivitiesListComponent implements OnInit {
  // dataSource = Activity[];
  columnsToDisplay = ['id', 'type', 'activityDate', 'isPublic'];
  expandedElement: Activity | null;

  dataSource: Activity[];
  columnLabels: string[];

  constructor(
    private activityService: ActivityService,
    private modalService: NgbModal
  ) {
    this.columnLabels = ['#', 'type', 'activityDate', 'isPublic'];

  }

  ngOnInit() {
    this.findAllActivities();
  }

  private findAllActivities() {
    this.activityService.findAll().subscribe(response => {
      this.dataSource = response.body;
      console.log(this.dataSource);
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

  private deleteActivity(activity: Activity) {
    if (this.activityService.deleteById(activity.id)) {
      console.log('deleted');
    } else {
      console.log('not deleted');
    }
  }

}
