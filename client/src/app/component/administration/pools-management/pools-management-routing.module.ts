import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PoolsListComponent} from './pools-list/pools-list.component';
import {AnimalDetailsComponent} from '../animals-management/animal-details/animal-details.component';
import {PoolDetailComponent} from './pool-detail/pool-detail.component';
import {PoolUpdateComponent} from './pool-update/pool-update.component';



const routes: Routes = [
  {
    path: 'pools-list',
    component: PoolsListComponent
  },
  {
    path: 'pool-details/:id',
    component: PoolDetailComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoolsManagementRoutingModule { }
