import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardLayoutComponent } from "./admin-dashboard-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "user-management",
        loadChildren: () =>
          import("./user-management/user-management.module").then(
            (m) => m.UserManagementModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardLayoutRoutingModule {}
