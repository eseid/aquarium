import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesListComponent } from './species-list/species-list.component';
import {SectorsManagementRoutingModule} from '../sectors-management/sectors-management-routing.module';
import {SharedModule} from '../../../shared.module';
import {SpeciesManagementRoutingModule} from './species-management-routing.module';
import { SpeciesFormComponent } from './species-form/species-form.component';
import {SectorsFormComponent} from '../sectors-management/sectors-form/sectors-form.component';
import {DeleteFormComponent} from '../sectors-management/delete-form/delete-form.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';



@NgModule({
  declarations: [SpeciesListComponent, SpeciesFormComponent, DeleteConfirmComponent],
  imports: [
    CommonModule,
    SpeciesManagementRoutingModule,
    SharedModule
  ],
  entryComponents: [SpeciesFormComponent, DeleteConfirmComponent]

})
export class SpeciesManagementModule { }
