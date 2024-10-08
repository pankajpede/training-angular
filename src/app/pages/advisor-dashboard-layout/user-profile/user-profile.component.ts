import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import {
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
  MsalService,
} from "@azure/msal-angular";
import { AccountInfo } from "@azure/msal-browser";
import { AccordionModule } from "primeng/accordion";
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-user-profile",
  standalone: true,
  imports: [CardModule, AvatarModule, AccordionModule, CommonModule],
  templateUrl: "./user-profile.component.html",
  styleUrl: "./user-profile.component.scss",
})
export class UserProfileComponent implements OnInit {
  userProfile: AccountInfo | null = null;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService
  ) {}

  ngOnInit(): void {
    this.userProfile = this.authService.instance.getActiveAccount();
  }
}
