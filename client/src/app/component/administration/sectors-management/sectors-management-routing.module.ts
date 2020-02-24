import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ActivitiesListComponent} from "../../aquarium-management/activity-management/activities-list/activities-list.component";
import {SectorsListComponent} from "./sectors-list/sectors-list.component";


const routes: Routes = [
  {
    path: 'sectors-list',
    component: SectorsListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorsManagementRoutingModule { }
