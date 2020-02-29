import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PoolsListComponent} from './pools-list/pools-list.component';
import {AnimalDetailsComponent} from '../animals-management/animal-details/animal-details.component';
import {PoolDetailComponent} from './pool-detail/pool-detail.component';
import {PoolUpdateComponent} from './pool-update/pool-update.component';
import {AnimalsListComponent} from '../animals-management/animals-list/animals-list.component';
import {AdminGuard} from '../../../_guards/admin.guard';
import {ResponsableGuard} from '../../../_guards/responsable.guard';



const routes: Routes = [
  {
    path: 'pools-list',
    component: PoolsListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'pool-details/:id',
    component: PoolDetailComponent,
    canActivate: [AdminGuard, ResponsableGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoolsManagementRoutingModule { }
