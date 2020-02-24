import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsManagementRoutingModule } from './animals-management-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import {SharedModule} from '../../../shared.module';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

@NgModule({
  declarations: [AnimalsListComponent, AnimalFormComponent, DeleteConfirmComponent, AnimalDetailsComponent],
  imports: [
    CommonModule,
    AnimalsManagementRoutingModule,
    SharedModule
  ],
  entryComponents: [AnimalFormComponent, DeleteConfirmComponent]
})
export class AnimalsManagementModule { }
