import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/layout/home/home.component';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared.module';
import {MainNavComponent} from './component/layout/main-nav/main-nav.component';
import { FooterComponent } from './component/layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
  providers: [NgbModal],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
