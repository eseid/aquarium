import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalsManagementRoutingModule } from './personals-management-routing.module';
import { PersonalsListComponent } from './personals-list/personals-list.component';
import {SharedModule} from '../../../shared.module';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';


@NgModule({
  declarations: [PersonalsListComponent, PersonalFormComponent, DeleteConfirmComponent, PersonalDetailComponent],
  imports: [
    CommonModule,
    PersonalsManagementRoutingModule,
    SharedModule
  ],
  entryComponents: [PersonalFormComponent]
})
export class PersonalsManagementModule { }
