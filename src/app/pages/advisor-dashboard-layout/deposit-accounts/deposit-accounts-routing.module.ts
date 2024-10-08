import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepositAccountsComponent } from "./deposit-accounts.component";

const routes: Routes = [
  {
    path: "",
    component: DepositAccountsComponent,
    children: [
      {
        path: "account-holdings",
        loadChildren: () =>
          import("./account-holdings/account-holdings.module").then(
            (m) => m.AccountHoldingsModule
          ),
      },
      {
        path: "deposit-account-landing",
        loadChildren: () =>
          import(
            "./account-deposit-landing/account-deposit-landing.module"
          ).then((m) => m.AccountDepositLandingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositAccountsRoutingModule {}
