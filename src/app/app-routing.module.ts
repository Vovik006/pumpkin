import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReservationComponent} from "./components/reservation/reservation.component";
import {LoginComponent} from "./components/admin/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component"


const routes: Routes = [
  {path:'reservation', component:ReservationComponent},
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
