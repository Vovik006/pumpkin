import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReservationComponent} from "./components/reservation/reservation.component";
import {LoginComponent} from "./components/admin/login/login.component";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ADashboardComponent } from './components/admin/a-dashboard/a-dashboard.component';
import { AMessagesComponent } from './components/admin/a-messages/a-messages.component';
import {RegComponent} from './components/reg/reg.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthguardGuard } from './helpers/authguard.guard';

const routes: Routes = [
  {path:'reservation', component:ReservationComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:DashboardComponent},
  {path:'adminpanel', component:ADashboardComponent, canActivate:[AuthguardGuard]}, 
  {path:'adminpanel/messages', component:AMessagesComponent, canActivate:[AuthguardGuard]},
  {path:'reg', component:RegComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
