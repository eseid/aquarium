import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PoolsListComponent} from './pools-list/pools-list.component';



const routes: Routes = [
  {
    path: 'pools-list',
    component: PoolsListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoolsManagementRoutingModule { }
