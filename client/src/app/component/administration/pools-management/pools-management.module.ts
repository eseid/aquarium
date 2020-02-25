import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolsListComponent } from './pools-list/pools-list.component';
import {SharedModule} from "../../../shared.module";
import {PoolsManagementRoutingModule} from "./pools-management-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PoolDetailComponent } from './pool-detail/pool-detail.component';
import {DeleteConfirmComponent} from './delete-confirm/delete-confirm.component';
import { PoolUpdateComponent } from './pool-update/pool-update.component';



@NgModule({
  declarations: [PoolsListComponent, DeleteConfirmComponent, PoolDetailComponent, PoolUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoolsManagementRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [PoolDetailComponent, DeleteConfirmComponent, PoolUpdateComponent]
})
export class PoolsManagementModule { }
