import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectorsListComponent} from '../sectors-management/sectors-list/sectors-list.component';
import {SectorsDetailsComponent} from '../sectors-management/sectors-details/sectors-details.component';
import {SpeciesListComponent} from './species-list/species-list.component';


const routes: Routes = [
  {
    path: 'species-list',
    component: SpeciesListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesManagementRoutingModule { }
