import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalsComponent } from './animals/animals.component'


const routes: Routes = [
  {
    path:'animals',
    component: AnimalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AnimalsComponent]
