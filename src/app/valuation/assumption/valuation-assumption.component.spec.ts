import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationAssumptionComponent } from './valuation-assumption.component';

describe('ValuationAssumptionComponent', () => {
  let component: ValuationAssumptionComponent;
  let fixture: ComponentFixture<ValuationAssumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationAssumptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationAssumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
