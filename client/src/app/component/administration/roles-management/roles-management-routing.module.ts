import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RolesListComponent} from './roles-list/roles-list.component';
import {AdminGuard} from '../../../_guards/admin.guard';


const routes: Routes = [
  {
    path: 'roles-list',
    component: RolesListComponent,
    canActivate: [AdminGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesManagementRoutingModule { }
