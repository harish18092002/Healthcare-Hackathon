import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursedashboardComponent } from './nursedashboard.component';

describe('NursedashboardComponent', () => {
  let component: NursedashboardComponent;
  let fixture: ComponentFixture<NursedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
