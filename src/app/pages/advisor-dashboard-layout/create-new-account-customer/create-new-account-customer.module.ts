import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewAccountCustomerRoutingModule } from './create-new-account-customer-routing.module';


import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateNewAccountCustomerRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
  ]
})
export class CreateNewAccountCustomerModule { }
