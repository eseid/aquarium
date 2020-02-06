import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalsListComponent} from './animals-list/animals-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'animals-list',
    component: AnimalsListComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AnimalsManagementRoutingModule { }
