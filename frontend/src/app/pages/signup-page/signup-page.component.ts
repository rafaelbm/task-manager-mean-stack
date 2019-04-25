import { Component, OnInit } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.scss"]
})
export class SignupPageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignupButtonClick(email: string, password: string) {
    this.authService
      .signup(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
      });
  }
}
