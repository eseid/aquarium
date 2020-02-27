import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalsListComponent} from './personals-list/personals-list.component';
import {PoolDetailComponent} from '../pools-management/pool-detail/pool-detail.component';
import {PersonalDetailComponent} from './personal-detail/personal-detail.component';

const routes: Routes = [
    {
        path: 'personals-list',
        component: PersonalsListComponent
    },
  {
    path: 'personal-details/:id',
    component: PersonalDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalsManagementRoutingModule { }
