import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHoldingsComponent } from './account-holdings.component';

describe('AccountHoldingsComponent', () => {
  let component: AccountHoldingsComponent;
  let fixture: ComponentFixture<AccountHoldingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHoldingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountHoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
