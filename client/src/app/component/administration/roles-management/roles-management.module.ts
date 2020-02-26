import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesManagementRoutingModule } from './roles-management-routing.module';
import {SharedModule} from '../../../shared.module';
import { RolesListComponent } from './roles-list/roles-list.component';


@NgModule({
  declarations: [RolesListComponent],
  imports: [
    CommonModule,
    RolesManagementRoutingModule,
    SharedModule
  ]
})
export class RolesManagementModule { }
