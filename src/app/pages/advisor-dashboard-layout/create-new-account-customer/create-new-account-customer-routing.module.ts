import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewAccountCustomerComponent } from './create-new-account-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNewAccountCustomerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewAccountCustomerRoutingModule { }
