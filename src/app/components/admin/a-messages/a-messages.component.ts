import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../../_services/message.service";

import { ContactUs } from "../../../_models/ContactUs";
@Component({
  selector: "app-a-messages",
  templateUrl: "./a-messages.component.html",
  styleUrls: ["./a-messages.component.css"]
})
export class AMessagesComponent implements OnInit {
  messages: ContactUs[];

  constructor(private ms: MessageService) {}

  ngOnInit() {
    this.ms.getMessages().subscribe(messages => (this.messages = messages));
  }
}
