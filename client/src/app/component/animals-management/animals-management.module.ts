import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalsManagementRoutingModule} from './animals-management-routing.module';
import {AnimalsListComponent} from './animals-list/animals-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";



@NgModule({
  declarations: [AnimalsListComponent, AnimalFormComponent],
  imports: [
    CommonModule,
    AnimalsManagementRoutingModule,
    FormsModule,
    SharedModule
  ],
  entryComponents: [AnimalFormComponent]
})
export class AnimalsManagementModule { }
