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
    path: 'species-management',
    loadChildren: () => import('./component/administration/species-management/species-management.module').then(mod => mod.SpeciesManagementModule)
  },
  {
    path: 'roles-management',
    loadChildren: () => import('./component/administration/roles-management/roles-management.module').then(mod => mod.RolesManagementModule)
  },
  {
    path: 'activities-management',
    loadChildren: () => import('./component/administration/activities-management/activities-management.module').then(mod => mod.ActivitiesManagementModule)
  },
  {
    path: 'personals-management',
    loadChildren: () => import('./component/administration/personals-management/personals-management.module').then(mod => mod.PersonalsManagementModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./component/account/account.module').then(mod => mod.AccountModule)
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
