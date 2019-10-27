import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { BenefitsComponent } from "./components/benefits/benefits.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ReservationComponent } from "./components/reservation/reservation.component";
import { EventService } from "./_services/event.service";
import { LoginComponent } from "./components/admin/login/login.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ADashboardComponent } from "./components/admin/a-dashboard/a-dashboard.component";
import { ANavbarComponent } from "./components/admin/a-navbar/a-navbar.component";
import { EventsComponent } from "./components/admin/events/events.component";
import { AMessagesComponent } from "./components/admin/a-messages/a-messages.component";

import { ProgramComponent } from "./components/program/program.component";
import { PriceComponent } from "./components/price/price.component";
import { ContactComponent } from "./components/contact/contact.component";
import { VideoComponent } from "./components/video/video.component";
import { RegComponent } from "./components/reg/reg.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

import { FlashMessagesModule } from "angular2-flash-messages";

import { CirclesComponent } from "./components/circles/circles.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ReservationComponent,
    BenefitsComponent,
    LoginComponent,
    AboutUsComponent,
    ADashboardComponent,
    ANavbarComponent,
    EventsComponent,
    AMessagesComponent,
    ProgramComponent,
    PriceComponent,
    ContactComponent,
    VideoComponent,
    RegComponent,
    NotFoundComponent,
    CirclesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, "Calendar"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
