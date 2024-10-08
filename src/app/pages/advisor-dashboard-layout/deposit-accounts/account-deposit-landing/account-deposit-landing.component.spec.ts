import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDepositLandingComponent } from './account-deposit-landing.component';

describe('AccountDepositLandingComponent', () => {
  let component: AccountDepositLandingComponent;
  let fixture: ComponentFixture<AccountDepositLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDepositLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDepositLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
