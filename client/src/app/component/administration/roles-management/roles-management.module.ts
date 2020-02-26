import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesManagementRoutingModule } from './roles-management-routing.module';
import {SharedModule} from '../../../shared.module';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesFormComponent } from './roles-form/roles-form.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';


@NgModule({
  declarations: [RolesListComponent, RolesFormComponent, DeleteConfirmComponent],
  imports: [
    CommonModule,
    RolesManagementRoutingModule,
    SharedModule
  ],
  entryComponents: [RolesFormComponent, DeleteConfirmComponent]

})
export class RolesManagementModule { }
