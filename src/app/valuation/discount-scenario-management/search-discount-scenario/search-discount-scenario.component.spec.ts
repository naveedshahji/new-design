import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiscountScenarioComponent } from './search-discount-scenario.component';

describe('SearchDiscountScenarioComponent', () => {
  let component: SearchDiscountScenarioComponent;
  let fixture: ComponentFixture<SearchDiscountScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDiscountScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiscountScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
