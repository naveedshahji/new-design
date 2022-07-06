import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModelExecutionComponent } from './search-model-execution.component';

describe('SearchModelExecutionComponent', () => {
  let component: SearchModelExecutionComponent;
  let fixture: ComponentFixture<SearchModelExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchModelExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchModelExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
