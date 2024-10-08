import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { LiquidityDashboardRoutingModule } from './liquidity-dashboard-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LiquidityDashboardRoutingModule,
    RouterModule,
    ButtonModule
  ]
})
export class LiquidityDashboardModule { }
