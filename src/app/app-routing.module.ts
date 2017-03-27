import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { TableComponent } from './dashboard/table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // }
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: "registration", component: RegistrationComponent },
  { path: "dashboard", component: DashboardComponent, 
     children: [
      { path: "chart", component: ChartComponent },
      { path: "table", component: TableComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
