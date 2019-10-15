import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReservationComponent} from "./components/reservation/reservation.component";


const routes: Routes = [
  {path:'reservation', component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
