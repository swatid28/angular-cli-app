import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { Ng2OrderModule } from './order-pipe/ng2-order.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { TableComponent } from './dashboard/table/table.component';
import {ListboxModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    ChartComponent,
    TableComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardRoutingModule,
    Ng2OrderModule,
    ListboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
