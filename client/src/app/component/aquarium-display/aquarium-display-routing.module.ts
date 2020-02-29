import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PoolsComponent} from './pools/pools.component';
import {SectorComponent} from './sector/sector.component';
import {AnimalsComponent} from './animals/animals.component';
import {ActivitiesComponent} from './activities/activities.component';
import {AnimalsActivitiesComponent} from './animals-activities/animals-activities.component';


const routes: Routes = [
  {
    path: 'pools',
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
    path: 'sectors',
    component: SectorComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  }
  ,
  {
    path: 'animals-activities',
    component: AnimalsActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AquariumDisplayRoutingModule { }
