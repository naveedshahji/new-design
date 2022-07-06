import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiscountScenarioComponent } from './create-discount-scenario.component';

describe('CreateDiscountScenarioComponent', () => {
  let component: CreateDiscountScenarioComponent;
  let fixture: ComponentFixture<CreateDiscountScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiscountScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiscountScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
