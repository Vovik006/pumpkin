import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../../_services/message.service";
import { ContactUs } from "../../../_models/ContactUs";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-a-message",
  templateUrl: "./a-message.component.html",
  styleUrls: ["./a-message.component.css"]
})
export class AMessageComponent implements OnInit {
  id: string;
  message: ContactUs;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ms: MessageService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.ms.getMessage(this.id).subscribe(message => {
      this.message = message;
      console.log(this.message);
    });
  }

  OnDeleteClick() {
    if (confirm("Are you sure?")) {
      this.ms.deleteMessage(this.message);
      this.router.navigate(["/adminpanel/messages"]);
    }
  }
  Check() {
    this.message.Checked=true;
    this.ms.updateMessage(this.message);
  }
  Uncheck()
  {
    this.message.Checked=false;
    this.ms.updateMessage(this.message);
  }
}
