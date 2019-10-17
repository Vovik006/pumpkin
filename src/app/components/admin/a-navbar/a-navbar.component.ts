import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-a-navbar",
  templateUrl: "./a-navbar.component.html",
  styleUrls: ["./a-navbar.component.css"]
})
export class ANavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loggedInUser: string;

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.loggedInUser = auth.email;
      }
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
