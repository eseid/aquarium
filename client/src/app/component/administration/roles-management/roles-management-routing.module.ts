import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpeciesListComponent} from '../species-management/species-list/species-list.component';
import {RolesListComponent} from './roles-list/roles-list.component';


const routes: Routes = [
  {
    path: 'roles-list',
    component: RolesListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesManagementRoutingModule { }
