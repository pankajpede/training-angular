import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from "@angular/router";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { AdvisorSidebarComponent } from "../../components/sidebars/advisor-sidebar/advisor-sidebar.component";
import { LoaderService } from "../../services/loader-service/loader.service";

@Component({
  selector: "app-advisor-dashboard-layout",
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AdvisorSidebarComponent,
  ],
  templateUrl: "./advisor-dashboard-layout.component.html",
  styleUrl: "./advisor-dashboard-layout.component.scss",
})
export class AdvisorDashboardLayoutComponent implements OnInit {
  constructor(
    private readonly router: Router,
    protected loaderService: LoaderService
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.loaderService.hide();
        }, 500);
        // this.loaderService.hide();
      }
    });
  }

  ngOnInit(): void {}
}
