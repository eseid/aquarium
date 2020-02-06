import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/layout/home/home.component';
import { AnimalsManagementModule } from './component/animals-management/animals-management.module';
import { AnimalsManagementRoutingModule } from './component/animals-management/animals-management-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AnimalsManagementModule,
    AnimalsManagementRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
