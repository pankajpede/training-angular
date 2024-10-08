import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorSidebarComponent } from './advisor-sidebar.component';

describe('AdvisorSidebarComponent', () => {
  let component: AdvisorSidebarComponent;
  let fixture: ComponentFixture<AdvisorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisorSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
