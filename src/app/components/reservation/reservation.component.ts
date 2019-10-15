import { Component, OnInit, ViewChild } from "@angular/core";
import { Event } from "../../_models/Event";
import { EventService } from "../../_services/event.service";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  event: Event = {
    Email: "",
    FirstName: "",
    LastName: "",
    Phone: "",
    AmountOfPeople: 0,
    ConfirmedEmail: "",
    EventTime: new Date(),
    EventType: "",
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
}
