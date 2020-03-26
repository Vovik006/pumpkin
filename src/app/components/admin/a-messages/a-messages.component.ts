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
  _messages: ContactUs[] = [];
  counterName: number = 0;
  counterEmail: number = 0;

  constructor(private ms: MessageService) {}

  ngOnInit() {
    this.ms
      .getMessages()
      .subscribe(
        messages => (
          (this.messages = messages), (this._messages = this.messages)
        )
      );
  }

  onSortName() {
    this.counterName++;
    switch (this.counterName) {
      case 1:
        this._messages.sort((a, b) => {
          if (a.Name < b.Name) return -1;
          else if (a.Name > b.Name) return 1;
          else return 0;
        });
        break;
      case 2:
        this._messages.sort((a, b) => {
          if (a.Name > b.Name) return -1;
          else if (a.Name < b.Name) return 1;
          else return 0;
        });
        break;
      case 3:
        this.counterName = 0;
        this._messages.reverse();//Need a fix
        break;
      default:
        break;
    }
  }

  onSortEmail() {
    this._messages = this.messages;
    this.counterEmail++;
    switch (this.counterEmail) {
      case 1:
        this._messages.sort((a, b) => {
          if (a.Email < b.Email) return -1;
          else if (a.Email > b.Email) return 1;
          else return 0;
        });
        break;
      case 2:
        this._messages.sort((a, b) => {
          if (a.Email > b.Email) return -1;
          else if (a.Email < b.Email) return 1;
          else return 0;
        });
        break;
      case 3:
        this.counterEmail = 0;
        this._messages.reverse();//Need a fix
        break;
      default:
        break;
    }
  }
  SortChecked() {
    this.counterEmail=0;
    this.counterName=0;
    this._messages = [];
    for (let message of this.messages) {
      if (message.Checked === true) {
        this._messages.push(message);
      }
    }
  }

  SortUnchecked() {
    this.counterEmail=0;
    this.counterName=0;
    this._messages = [];
    for (let message of this.messages) {
      if (message.Checked === false) {
        this._messages.push(message);
      }
    }
  }
}
