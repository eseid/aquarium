import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared.module';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesVisitComponent } from './activities-visit/activities-visit.component';
import { ActivtyFormComponent } from './activty-form/activty-form.component';
import { DeleteActivityConfirmComponent } from './delete-activity-confirm/delete-activity-confirm.component';
import { ActivitiyDetailsComponent } from './activitiy-details/activitiy-details.component';



@NgModule({
  declarations: [ActivitiesListComponent, ActivitiesVisitComponent, ActivtyFormComponent, DeleteActivityConfirmComponent, ActivitiyDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  entryComponents: [ActivtyFormComponent]

})
export class ActivityManagementModule { }
