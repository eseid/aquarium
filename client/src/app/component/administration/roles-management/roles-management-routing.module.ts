import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
