import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AquariumDisplayRoutingModule } from './aquarium-display-routing.module';
import { SectorComponent } from './sector/sector.component';
import { PoolsComponent } from './pools/pools.component';
import { AnimalsComponent } from './animals/animals.component';
import {SharedModule} from '../../shared.module';
import { ActivitiesComponent } from './activities/activities.component';
import { AnimalsActivitiesComponent } from './animals-activities/animals-activities.component';
import { PersonalActivitiesComponent } from './personal-activities/personal-activities.component';


@NgModule({
  declarations: [SectorComponent, PoolsComponent, AnimalsComponent, ActivitiesComponent, AnimalsActivitiesComponent, PersonalActivitiesComponent],
  imports: [
    CommonModule,
    AquariumDisplayRoutingModule,
    SharedModule
  ]
})
export class AquariumDisplayModule { }
