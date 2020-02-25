import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesListComponent} from './activities-list/activities-list.component';
import {ActivitiesVisitComponent} from './activities-visit/activities-visit.component';

const routes: Routes = [
  {
    path: 'activities-list',
    component: ActivitiesListComponent
  },
  {
    path: 'activity-visit',
    component: ActivitiesVisitComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityManagementRoutingModule { }
