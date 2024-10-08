import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAccountCustomerComponent } from './create-new-account-customer.component';

describe('CreateNewAccountCustomerComponent', () => {
  let component: CreateNewAccountCustomerComponent;
  let fixture: ComponentFixture<CreateNewAccountCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewAccountCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewAccountCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
