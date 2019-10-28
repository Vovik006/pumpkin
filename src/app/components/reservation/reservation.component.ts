import { Component, OnInit, ViewChild } from "@angular/core";
import { Event } from "../../_models/Event";
import { EventService } from "../../_services/event.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import {
  NgbCalendar,
  NgbDatepickerConfig,
  NgbDateStruct,
  NgbDate
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  counter: number = 0;
  moneyCounter: number = 0;
  showMoneyCounter: boolean;
  today: Date = new Date();
  minDate;
  markDisabled;

  eventForm: FormGroup;
  submit = false;

  constructor(
    private es: EventService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private formBuilder: FormBuilder,
    private config: NgbDatepickerConfig,
    private calendar: NgbCalendar
  ) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      type: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      time: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required])
    });
    console.log(this.markDisabled);
  }



  onSubmit() {
    const event: Event = {
      FirstName: this.eventForm.get("firstName").value,
      LastName: this.eventForm.get("lastName").value,
      Email: this.eventForm.get("email").value,
      Phone: this.eventForm.get("phone").value,
      Type: this.eventForm.get("type").value,
      Date: this.eventForm.get("date").value,
      Time: this.eventForm.get("time").value,
      AmountOfPeople: this.counter,
      Confirmed: false
    };
    this.es.newEvent(event);
    this.router.navigate(["/"]);
  }
  Plus() {
    this.counter = this.counter + 1;
    this.showMoneyCounter = true;
    if (
      this.counter >= 1 &&
      this.eventForm.get("type").value === "Wycieczka farma dyń"
    ) {
      this.moneyCounter = this.moneyCounter + 45;
    } else if (
      this.counter >= 1 &&
      this.eventForm.get("type").value === "Wycieczka farma dyń z jedzeniem"
    ) {
      this.moneyCounter = this.moneyCounter + 55;
    } else if (
      this.counter >= 1 &&
      this.eventForm.get("type").value === "Urodziny"
    ) {
      this.moneyCounter = this.moneyCounter + 55;
    } else if (this.eventForm.get("type").value === "") {
      this.showMoneyCounter = false;
      this.counter = 0;
    }
  }

  Minus() {
    if (
      this.counter >= 1 &&
      this.eventForm.get("type").value === "Wycieczka farma dyń"
    ) {
      this.counter = this.counter - 1;
      this.moneyCounter = this.moneyCounter - 45;
      if (this.counter === 0) {
        this.showMoneyCounter = false;
      }
    } else if (
      this.counter >= 1 &&
      this.eventForm.get("type").value === "Wycieczka farma dyń z jedzeniem"
    ) {
      this.counter = this.counter - 1;
      this.moneyCounter = this.moneyCounter - 55;
      if (this.counter === 0) {
        this.showMoneyCounter = false;
      }
    } else if (
      this.counter >= 1 &&
      this.eventForm.get("type").value === "Urodziny"
    ) {
      this.counter = this.counter - 1;
      this.moneyCounter = this.moneyCounter - 55;
      if (this.counter === 0) {
        this.showMoneyCounter = false;
      }
    } else if (
      this.eventForm.get("type").value === "--wybierz--" &&
      this.counter > 0 &&
      this.counter != 0
    ) {
      this.showMoneyCounter = false;
      this.counter = this.counter - 1;
    }
  }

  Option() {
    this.disableDays(this.eventForm.get("type").value);
    if (this.eventForm.get("type").value === "Wycieczka farma dyń") {
      this.moneyCounter = 45 * this.counter;
      // this.markDisabled = (date: NgbDate) =>
      //   this.calendar.getWeekday(date) >= 6;
    } else if (
      this.eventForm.get("type").value === "Wycieczka farma dyń z jedzeniem"
    ) {
      // this.markDisabled = (date: NgbDate) =>
      //   this.calendar.getWeekday(date) >= 6;
      this.moneyCounter = 55 * this.counter;
    } else if (this.eventForm.get("type").value === "Urodziny") {
      this.moneyCounter = 55 * this.counter;
      // this.markDisabled = (date: NgbDate) =>
      //   this.calendar.getWeekday(date) <= 5;
    }
  }
  // TODO VLAD

  disableDays(option) {
    console.log(option);
    // if (option === "Wycieczka farma dyń" || "Wycieczka farma dyń z jedzeniem") {
    //   this.markDisabled = (date: NgbDate) =>
    //     this.calendar.getWeekday(date) >= 6;
    // } else if (option === "Urodziny") {
    //   this.markDisabled = (date: NgbDate) =>
    //     this.calendar.getWeekday(date) <= 5;
    // }
    // return this.markDisabled;
    switch (option) {
      case "Wycieczka farma dyń":
        this.markDisabled = (date: NgbDate) =>
          this.calendar.getWeekday(date) >= 6;
        break;
      case "Wycieczka farma dyń z jedzeniem":
        this.markDisabled = (date: NgbDate) =>
          this.calendar.getWeekday(date) >= 6;
        break;
      case "Urodziny":
        this.markDisabled = (date: NgbDate) =>
          this.calendar.getWeekday(date) <= 5;
        break;
      default:
        break;
    }
  }
}
