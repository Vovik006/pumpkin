import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReservationComponent} from "./components/reservation/reservation.component";
import {LoginComponent} from "./components/admin/login/login.component";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ADashboardComponent } from './components/admin/a-dashboard/a-dashboard.component';
import { AMessagesComponent } from './components/admin/a-messages/a-messages.component';

const routes: Routes = [
  {path:'reservation', component:ReservationComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:DashboardComponent},
  {path:'adminpanel', component:ADashboardComponent},
  {path:'adminpanel/messages', component:AMessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
