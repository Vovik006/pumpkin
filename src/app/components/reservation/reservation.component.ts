import { Component, OnInit, ViewChild } from "@angular/core";
import { Event } from "../../_models/Event";
import { EventService } from "../../_services/event.service";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  counter: number = 0;
  moneyCounter: number = 0;
  showMoneyCounter: boolean;
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

  constructor(private es: EventService) {}

  ngOnInit() {}

  onSubmit() {
    this.event.AmountOfPeople = this.counter;
    this.es.newEvent(this.event);
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
      this.counter = 0;
      this.moneyCounter = 0;
    } else if (this.event.Type === "Wycieczka farma dyń z jedzeniem") {
    } else if (this.event.Type === "Urodziny") {
    }
  }
}
