import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {AdminGuard} from '../../../_guards/admin.guard';

const routes: Routes = [
  {
    path: 'animals-list',
    component: AnimalsListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'animal-details/:id',
    component: AnimalDetailsComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsManagementRoutingModule { }
