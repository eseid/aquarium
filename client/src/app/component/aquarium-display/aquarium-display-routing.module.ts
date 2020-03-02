import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PoolsComponent} from './pools/pools.component';
import {SectorComponent} from './sector/sector.component';
import {AnimalsComponent} from './animals/animals.component';
import {ActivitiesComponent} from './activities/activities.component';
import {AnimalsActivitiesComponent} from './animals-activities/animals-activities.component';
import {PersonalActivitiesComponent} from './personal-activities/personal-activities.component';


const routes: Routes = [
  {
    path: 'pools/:id',
    component: PoolsComponent
  },
  {
    path: 'sectors',
    component: SectorComponent
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'animals-activities/:id',
    component: AnimalsActivitiesComponent
  },
  {
    path: 'personal-activities/:id',
    component: PersonalActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AquariumDisplayRoutingModule { }
