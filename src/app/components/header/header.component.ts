import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
} from "@azure/msal-angular";
import {
  AuthenticationResult,
  EventMessage,
  EventType
} from "@azure/msal-browser";
import { MenuItem } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { filter, Subject, takeUntil } from "rxjs";
import { SidebarService } from "../../shared/sidebar-service/sidebar.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule, MenuModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  private readonly _destroying$ = new Subject<void>();

  profileOptions: MenuItem[] = [
    {
      label: "Profile",
      icon: "pi pi-user",
      command: () => {
        this.router.navigate(["/advisor-dashboard/user-profile"]);
      },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        this.logout();
      },
    },
  ];

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService,
    private authService: MsalService,
    protected sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);

        this.router.navigate(["/advisor-dashboard"]);
      });
  }

  logout() {
    this.authService
      .logoutPopup({
        account: this.authService.instance.getActiveAccount(),
      })
      .subscribe({
        next: () => {
          this.router.navigate(["/auth/login"]);
        },
      });
  }
}
