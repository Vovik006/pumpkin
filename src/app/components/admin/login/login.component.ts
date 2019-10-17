import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        //Must be a navigation to an admin panel
        this.router.navigate(['/adminpanel']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password);
  }
}
