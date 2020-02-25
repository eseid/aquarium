import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectorsListComponent} from './sectors-list/sectors-list.component';
import {SectorsDetailsComponent} from './sectors-details/sectors-details.component';


const routes: Routes = [
  {
    path: 'sectors-list',
    component: SectorsListComponent
  },
  {
    path: 'sectors-details/:id',
    component: SectorsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorsManagementRoutingModule { }
