import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared.module';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesVisitComponent } from './activities-visit/activities-visit.component';
import {MainNavComponent} from '../layout/main-nav/main-nav.component';
import {MatTableModule} from "@angular/material/table";
import { ActivtyFormComponent } from './activty-form/activty-form.component';



@NgModule({
  declarations: [ActivitiesListComponent, ActivitiesVisitComponent, ActivtyFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ],
  entryComponents: [ActivtyFormComponent]

})
export class ActivityManagementModule { }
