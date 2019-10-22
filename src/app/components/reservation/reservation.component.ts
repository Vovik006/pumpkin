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

  ngOnInit() {
    this.es.getEvents().subscribe(e => console.log(e));
  }

  onSubmit() {
    this.event.AmountOfPeople = this.counter;
    this.es.newEvent(this.event);
  }
  Plus() {
    this.counter = this.counter + 1;
  }

  Minus() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
}
