import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/layout/home/home.component';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared.module';
import {MainNavComponent} from './component/layout/main-nav/main-nav.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './_helpers/http-error-interceptor';
import {JwtInterceptor} from './_helpers/jwt-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
