import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/layout/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'animals-management',
    loadChildren: () => import('./component/administration/animals-management/animals-management.module').then(mod => mod.AnimalsManagementModule)
  },
  {
    path: 'activities-management',
    loadChildren: () => import('./component/aquarium-management/activity-management/activity-management.module').then(mod => mod.ActivityManagementModule)
  },
  {
    path: 'pools-management',
    loadChildren: () => import('./component/administration/pools-management/pools-management.module').then(mod => mod.PoolsManagementModule)
  },
  {
    path: 'sectors-management',
    loadChildren: () => import('./component/administration/sectors-management/sectors-management.module').then(mod => mod.SectorsManagementModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
