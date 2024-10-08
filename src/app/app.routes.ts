import { Routes } from "@angular/router";

export const routes: Routes = [
  // temporary redirect
  {
    path: "",
    pathMatch: "prefix",
    redirectTo: "auth/login",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth-layout/auth-layout.module").then(
        (m) => m.AuthLayoutModule
      ),
  },
  {
    path: "advisor-dashboard",
    // canActivate: [MsalGuard],
    loadChildren: () =>
      import(
        "./pages/advisor-dashboard-layout/advisor-dashboard-layout.module"
      ).then((m) => m.AdvisorDashboardLayoutModule),
  },
  {
    path: "admin-dashboard",
    loadChildren: () =>
      import(
        "./pages/admin-dashboard-layout/admin-dashboard-layout.module"
      ).then((m) => m.AdminDashboardLayoutModule),
  },
];
