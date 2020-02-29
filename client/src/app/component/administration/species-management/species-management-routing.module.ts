import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpeciesListComponent} from './species-list/species-list.component';
import {AdminGuard} from '../../../_guards/admin.guard';


const routes: Routes = [
  {
    path: 'species-list',
    component: SpeciesListComponent,
    canActivate: [AdminGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesManagementRoutingModule { }
