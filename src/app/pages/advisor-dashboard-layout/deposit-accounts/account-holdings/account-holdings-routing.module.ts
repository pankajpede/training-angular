import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHoldingsComponent } from './account-holdings.component';

const routes: Routes = [
  {
    path: '',
    component: AccountHoldingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHoldingsRoutingModule { }
