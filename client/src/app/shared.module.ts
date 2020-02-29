import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputFileComponent, InputFileConfig, InputFileModule, InputFileService} from 'ngx-input-file';

const config: InputFileConfig = {};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputFileModule.forRoot(config),
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    NgbModule,
    InputFileModule,
  ],
  providers: [
    NgbModal,
    NgbActiveModal,
    InputFileService,

  ]
})
export class SharedModule { }
