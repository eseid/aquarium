import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalsListComponent} from '../animals-management/animals-list/animals-list.component';
import {AnimalDetailsComponent} from '../animals-management/animal-details/animal-details.component';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {ResponsableGuard} from '../../../_guards/responsable.guard';


const routes: Routes = [
  {
    path: 'activities-list',
    component: ActivityListComponent,
    canActivate: [ResponsableGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesManagementRoutingModule { }
