import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectorsListComponent} from './sectors-list/sectors-list.component';
import {SectorsDetailsComponent} from './sectors-details/sectors-details.component';
import {AnimalsListComponent} from '../animals-management/animals-list/animals-list.component';
import {AdminGuard} from '../../../_guards/admin.guard';


const routes: Routes = [
  {
    path: 'sectors-list',
    component: SectorsListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'sectors-details/:id',
    component: SectorsDetailsComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorsManagementRoutingModule { }
