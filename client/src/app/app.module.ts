import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/layout/home/home.component';
import { AnimalsManagementModule } from './component/administration/animals-management/animals-management.module';
import { AnimalsManagementRoutingModule } from './component/administration/animals-management/animals-management-routing.module';
import { ActivityManagementModule } from './component/aquarium-management/activity-management/activity-management.module';
import { ActivityManagementRoutingModule } from './component/aquarium-management/activity-management/activity-management-routing.module';



import {NgbModal,  NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './component/layout/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {SharedModule} from './shared.module';
import { NgwWowModule } from 'ngx-wow';
import { PoolsManagementRoutingModule } from './component/administration/pools-management/pools-management-routing.module';
import {PoolsManagementModule} from './component/administration/pools-management/pools-management.module';
import {MatTableModule} from "@angular/material/table";
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AnimalsManagementModule,
        AnimalsManagementRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatOptionModule,
        MatSelectModule,
        ActivityManagementModule,
        ActivityManagementRoutingModule,
        SharedModule,
        NgwWowModule,
        PoolsManagementRoutingModule,
        PoolsManagementModule,
        MatTableModule,
      ToastrModule.forRoot()


    ],
  providers: [NgbModal],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
