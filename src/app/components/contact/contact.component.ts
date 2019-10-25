import { Component, OnInit, ViewChild } from "@angular/core";
import { MessageService } from "../../_services/message.service";
import { ContactUs } from "../../_models/ContactUs";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  message: ContactUs = {
    Email: "",
    Name: "",
    Message: ""
  };

  click:boolean = false;

  constructor(private ms: MessageService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.ms.newMessage(this.message);
    this.click=true;
    window.location.reload();
  }
}
