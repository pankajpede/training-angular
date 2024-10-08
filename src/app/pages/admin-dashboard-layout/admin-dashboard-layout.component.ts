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
import { LoaderService } from "../../services/loader-service/loader.service";
import { AdminSidebarComponent } from "../../components/sidebars/admin-sidebar/admin-sidebar.component";

@Component({
  selector: "app-admin-dashboard-layout",
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent,
  ],
  templateUrl: "./admin-dashboard-layout.component.html",
  styleUrl: "./admin-dashboard-layout.component.scss",
})
export class AdminDashboardLayoutComponent implements OnInit {
  constructor(private router: Router, protected loaderService: LoaderService) {
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
