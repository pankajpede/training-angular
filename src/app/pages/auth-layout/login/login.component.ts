import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
  MsalService
} from "@azure/msal-angular";
import {
  AuthenticationResult,
  InteractionType,
  PopupRequest,
  RedirectRequest
} from "@azure/msal-browser";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { LoaderService } from "./../../../services/loader-service/loader.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    DividerModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();

    if (this.authService.instance.getActiveAccount()) {
      this.router.navigate(["/advisor-dashboard"]);
    }
  }

  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService
          .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
          .subscribe({
            next: (response: AuthenticationResult) => {
              this.authService.instance.setActiveAccount(response.account);
              this.router.navigate(["/advisor-dashboard"]);

              this.loaderService.hide();
            },
            error: (error) => {
              console.error(error);

              this.loaderService.hide();
            },
          });
      } else {
        this.authService.loginPopup().subscribe({
          next: (response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
            this.router.navigate(["/advisor-dashboard"]);

            this.loaderService.hide();
          },
          error: (error) => {
            console.error(error);

            this.loaderService.hide();
          },
        });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({
          ...this.msalGuardConfig.authRequest,
        } as RedirectRequest);
      } else {
        this.authService.loginRedirect();
      }
    }
  }
}
