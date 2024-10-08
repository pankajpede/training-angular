import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvisorDashboardLayoutComponent } from "./advisor-dashboard-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AdvisorDashboardLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "liquidity-dashboard",
        loadChildren: () =>
          import("./liquidity-dashboard/liquidity-dashboard.module").then(
            (m) => m.LiquidityDashboardModule
          ),
      },
      {
        path: "client-list",
        loadChildren: () =>
          import("./client-list/client-list.module").then(
            (m) => m.ClientListModule
          ),
      },
      {
        path: "deposit-accounts",
        loadChildren: () =>
          import("./deposit-accounts/deposit-accounts.module").then(
            (m) => m.DepositAccountsModule
          ),
      },
      {
        path: "create-new-account",
        loadChildren: () =>
          import("./create-new-account/create-new-account.module").then(
            (m) => m.CreateNewAccountModule
          ),
      },
      {
        path: "create-new-account-customer",
        loadChildren: () =>
          import(
            "./create-new-account-customer/create-new-account-customer.module"
          ).then((m) => m.CreateNewAccountCustomerModule),
      },
      {
        path: "user-profile",
        loadChildren: () =>
          import("./user-profile/user-profile.module").then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: "dashboard-customer",
        loadChildren: () =>
          import("./dashboard-customer/dashboard-customer.module").then(
            (m) => m.DashboardCustomerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisorDashboardLayoutRoutingModule {}
