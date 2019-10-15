import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

<<<<<<< HEAD
=======
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

>>>>>>> aec0aa79688773edea2a4b9e2a13d3933e363977
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD
import { DashboardComponent } from './components/dashboard/dashboard.component';
=======
import { ReservationComponent } from './reservation/reservation.component';
import { EventService } from './_services/event.service';
>>>>>>> aec0aa79688773edea2a4b9e2a13d3933e363977

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
<<<<<<< HEAD
    DashboardComponent,
=======
    ReservationComponent,
>>>>>>> aec0aa79688773edea2a4b9e2a13d3933e363977
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase,'Calendar'),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
