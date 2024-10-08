import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDepositLandingComponent } from './account-deposit-landing.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDepositLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDepositLandingRoutingModule { }
