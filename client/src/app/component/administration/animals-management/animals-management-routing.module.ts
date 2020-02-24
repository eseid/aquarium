import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import {AnimalDetailsComponent} from './animal-details/animal-details.component';

const routes: Routes = [
  {
    path: 'animals-list',
    component: AnimalsListComponent
  },
  {
    path: 'animal-details/:id',
    component: AnimalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsManagementRoutingModule { }
