import { Component, OnInit, ViewChild } from "@angular/core";
import { Event } from "../../_models/Event";
import { EventService } from "../../_services/event.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  counter: number = 0;
  moneyCounter: number = 0;
  showMoneyCounter: boolean;
  buttonRez: boolean=false;
  event: Event = {
    Type: "",
    Date: new Date(),
    Time: 0,
    AmountOfPeople: 9,
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Confirmed: false
  };
  today: Date = new Date();

  eventForm: FormGroup;

  constructor(
    private es: EventService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // this.eventForm = new FormGroup({
    //   FirstName: new FormControl,
    //   LastName: ["", Validators.required],
    //   Email: ["", [Validators.required, Validators.email]],
    //   Phone: ["", [Validators.required, Validators.minLength(6)]]
    // });
    // if(this.eventForm.valid){
    //   this.buttonRez=true;
    // }
  }

  onSubmit() {
    // if (this.eventForm.valid) {
      this.event.AmountOfPeople = this.counter;
      this.es.newEvent(this.event);
      // window.location.href = "/";
      this.flashMessage.show("New client added", {
        cssClass: "alert-success",
        timeout: 40000000
      });
      this.router.navigate(["/"]);
    
  }
  Plus() {
    this.counter = this.counter + 1;
    this.showMoneyCounter = true;
    if (this.counter >= 1 && this.event.Type === "Wycieczka farma dyń") {
      this.moneyCounter = this.moneyCounter + 45;
    } else if (
      this.counter >= 1 &&
      this.event.Type === "Wycieczka farma dyń z jedzeniem"
    ) {
      this.moneyCounter = this.moneyCounter + 55;
    } else if (this.counter >= 1 && this.event.Type === "Urodziny") {
      this.moneyCounter = this.moneyCounter + 55;
    } else if (this.event.Type === "") {
      this.showMoneyCounter = false;
      this.counter = 0;
    }
  }

  Minus() {
    if (this.counter >= 1 && this.event.Type === "Wycieczka farma dyń") {
      this.counter = this.counter - 1;
      this.moneyCounter = this.moneyCounter - 45;
      if (this.counter === 0) {
        this.showMoneyCounter = false;
      }
    } else if (
      this.counter >= 1 &&
      this.event.Type === "Wycieczka farma dyń z jedzeniem"
    ) {
      this.counter = this.counter - 1;
      this.moneyCounter = this.moneyCounter - 55;
      if (this.counter === 0) {
        this.showMoneyCounter = false;
      }
    } else if (this.counter >= 1 && this.event.Type === "Urodziny") {
      this.counter = this.counter - 1;
      this.moneyCounter = this.moneyCounter - 55;
      if (this.counter === 0) {
        this.showMoneyCounter = false;
      }
    } else if (this.event.Type === "") {
      this.showMoneyCounter = false;
      this.counter = 0;
    }
  }

  Option() {
    if (this.event.Type === "Wycieczka farma dyń") {
      this.moneyCounter = 45 * this.counter;
    } else if (
      this.event.Type === "Wycieczka farma dyń z jedzeniem" ||
      this.event.Type === "Urodziny"
    ) {
      this.moneyCounter = 55 * this.counter;
    }
  }
}
