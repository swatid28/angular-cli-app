import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { Ng2OrderModule } from '../order-pipe/ng2-order.module';
@NgModule({
  imports: [
    CommonModule,
    Ng2OrderModule
    //DashboardRoutingModule
  ],
  declarations: [DashboardComponent, ChartComponent, TableComponent]
})
export class DashboardModule { }
