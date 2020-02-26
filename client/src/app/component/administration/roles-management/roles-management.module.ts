import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesManagementRoutingModule } from './roles-management-routing.module';
import {SharedModule} from '../../../shared.module';
import { RolesComponentComponent } from './roles-component/roles-component.component';
import { RolesComponent } from './roles/roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';


@NgModule({
  declarations: [RolesComponentComponent, RolesComponent, RolesListComponent],
  imports: [
    CommonModule,
    RolesManagementRoutingModule,
    SharedModule
  ]
})
export class RolesManagementModule { }
