import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolsListComponent } from './pools-list/pools-list.component';
import {SharedModule} from "../../../shared.module";
import {PoolsManagementRoutingModule} from "./pools-management-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PoolsFormComponent } from './pools-form/pools-form.component';
import {AnimalFormComponent} from "../animals-management/animal-form/animal-form.component";
import { PoolDetailComponent } from './pool-detail/pool-detail.component';



@NgModule({
  declarations: [PoolsListComponent, PoolsFormComponent, PoolDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoolsManagementRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [PoolsFormComponent, PoolDetailComponent]
})
export class PoolsManagementModule { }
