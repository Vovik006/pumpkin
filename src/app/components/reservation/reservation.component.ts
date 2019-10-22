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
  event: Event;

  today:Date=new Date();
  date:any;

  constructor(private es: EventService) {}

  ngOnInit() {
    this.es.getEvents().subscribe(e => console.log(e));
    this.date=this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
  }

  onSubmit(event) {

    this.es.newEvent(event);
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
