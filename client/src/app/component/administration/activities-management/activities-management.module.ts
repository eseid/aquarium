import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesManagementRoutingModule } from './activities-management-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import {ActivityFormComponent} from './activity-form/activity-form.component';
import {SharedModule} from '../../../shared.module';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';



@NgModule({
  declarations: [ActivityListComponent, ActivityFormComponent, DeleteConfirmComponent],
  imports: [
    CommonModule,
    ActivitiesManagementRoutingModule,
    SharedModule
  ],
  entryComponents: [ActivityFormComponent, DeleteConfirmComponent]
})
export class ActivitiesManagementModule { }
