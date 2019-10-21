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
  kek: string;
  myDate = new Date();

  event: Event = {
    Email: "",
    FirstName: "",
    LastName: "",
    Phone: "",
    AmountOfPeople: 0,
    Date: new Date(),
    Time: 0,
    Type: "",
    Confirmed: false
  };
  eventik: Event;

  @ViewChild("eventForm", { static: false }) form: any;

  constructor(private es: EventService) {}

  ngOnInit() {
    this.es.getEvents().subscribe(e => console.log(e));
  }

  onSubmit({ value, valid }: { value: Event; valid: boolean }) {
    if (valid) {
      this.es.newEvent(value);
    }
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
