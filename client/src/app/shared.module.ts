import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputFileModule} from 'ngx-input-file';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    NgbModule,
    InputFileModule
  ],
  providers: [
    NgbModal,
    NgbActiveModal
  ]
})
export class SharedModule { }
