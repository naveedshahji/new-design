import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationModelComponent } from './valuation-model.component';

describe('ValuationModelComponent', () => {
  let component: ValuationModelComponent;
  let fixture: ComponentFixture<ValuationModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
