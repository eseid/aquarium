import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalService } from './animals/animal.service';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalComponent } from './animals/animal/animal.component'

@NgModule({
  declarations: [
    AppComponent,
    //AdminComponent
    routingComponents,
    AnimalsComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
