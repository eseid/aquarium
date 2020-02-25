import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectorsManagementRoutingModule } from './sectors-management-routing.module';
import { SectorsListComponent } from './sectors-list/sectors-list.component';
import { SectorsDetailsComponent } from './sectors-details/sectors-details.component';
import { SectorsFormComponent } from './sectors-form/sectors-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import {SharedModule} from '../../../shared.module';


@NgModule({
  declarations: [SectorsListComponent, SectorsDetailsComponent, SectorsFormComponent, DeleteFormComponent],
  imports: [
    CommonModule,
    SectorsManagementRoutingModule,
    SharedModule
  ],
  entryComponents: [SectorsFormComponent, DeleteFormComponent]
})
export class SectorsManagementModule { }
