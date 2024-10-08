import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAccountsComponent } from './deposit-accounts.component';

describe('DepositAccountsComponent', () => {
  let component: DepositAccountsComponent;
  let fixture: ComponentFixture<DepositAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
