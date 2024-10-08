import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityDashboardComponent } from './liquidity-dashboard.component';

describe('LiquidityDashboardComponent', () => {
  let component: LiquidityDashboardComponent;
  let fixture: ComponentFixture<LiquidityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidityDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
