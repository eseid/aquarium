import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalsManagementRoutingModule} from './animals-management-routing.module';
import {AnimalsListComponent} from './animals-list/animals-list.component';



@NgModule({
  declarations: [AnimalsListComponent],
  imports: [
    CommonModule,
    AnimalsManagementRoutingModule
  ]
})
export class AnimalsManagementModule { }
