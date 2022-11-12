import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsdashboardComponent } from './doctorsdashboard.component';

describe('DoctorsdashboardComponent', () => {
  let component: DoctorsdashboardComponent;
  let fixture: ComponentFixture<DoctorsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
