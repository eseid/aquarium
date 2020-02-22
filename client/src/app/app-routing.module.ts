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
    loadChildren: () => import('./component/animals-management/animals-management.module').then(mod => mod.AnimalsManagementModule)
  },
  {
    path: 'activity-management',
    loadChildren: () => import('./component/activity-management/activity-management.module').then(mod => mod.ActivityManagementModule)
  },
  {
    path: 'sectors-management',
    loadChildren: () => import('./component/sectors-management/sectors-management.module').then(mod => mod.SectorsManagementModule)
  },
  {
    path: 'pools-management',
    loadChildren: () => import('./component/pools-management/pools-management.module').then(mod => mod.PoolsManagementModule)
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
