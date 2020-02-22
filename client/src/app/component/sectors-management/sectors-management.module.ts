import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared.module';
import { SectorFormComponent } from './sector-form/sector-form.component';
import {PoolsFormComponent} from "../pools-management/pools-form/pools-form.component";



@NgModule({
  declarations: [SectorFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [SectorFormComponent]

})
export class SectorsManagementModule { }
