import { Component, OnInit } from "@angular/core";
import { EventService } from "../../../_services/event.service";

import { Event } from "../../../_models/Event";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  events: Event[];
  _events: Event[] = [];
  counter: number=0;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService
      .getEvents()
      .subscribe(
        events => ((this.events = events), (this._events = this.events))
      );
  }
  SortByName() {
    this.counter++;
    console.log(this.counter);
    switch (this.counter) {
      case 1:
        this._events.sort((a, b) => {
          if (a.FirstName < b.FirstName) return -1;
          else if (a.FirstName > b.FirstName) return 1;
          else return 0;
        });
        break;
      case 2:
        this._events.sort((a, b) => {
          if (a.FirstName > b.FirstName) return -1;
          else if (a.FirstName < b.FirstName) return 1;
          else return 0;
        });
        break;
      case 3:
        this.counter = 0;
        this._events.reverse(); //Need a fix
        break;
      default:
        break;
    }
  }
}
