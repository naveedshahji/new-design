import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationCohortComponent } from './valuation-cohort.component';

describe('ValuationCohortComponent', () => {
  let component: ValuationCohortComponent;
  let fixture: ComponentFixture<ValuationCohortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationCohortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
