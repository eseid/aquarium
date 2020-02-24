import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MainNavComponent} from './component/layout/main-nav/main-nav.component';



@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

  ],
  exports: [
    FormsModule,
    HttpClientModule,
    NgbModule,
    MainNavComponent,
  ],
  providers: [
    NgbModal,
    NgbActiveModal
  ]
})
export class SharedModule { }
