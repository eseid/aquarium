import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalsListComponent} from './personals-list/personals-list.component';
import {PoolDetailComponent} from '../pools-management/pool-detail/pool-detail.component';
import {PersonalDetailComponent} from './personal-detail/personal-detail.component';
import {AnimalsListComponent} from '../animals-management/animals-list/animals-list.component';
import {AdminGuard} from '../../../_guards/admin.guard';

const routes: Routes = [
    {
        path: 'personals-list',
        component: PersonalsListComponent,
      canActivate: [AdminGuard]
    },
  {
    path: 'personal-details/:id',
    component: PersonalDetailComponent,
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalsManagementRoutingModule { }
