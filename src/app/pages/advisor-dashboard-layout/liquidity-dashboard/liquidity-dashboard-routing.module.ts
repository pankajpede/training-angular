import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiquidityDashboardComponent } from './liquidity-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidityDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquidityDashboardRoutingModule {}
