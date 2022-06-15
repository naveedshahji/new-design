import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewBusinessComponent } from './search-new-business.component';

describe('SearchNewBusinessComponent', () => {
  let component: SearchNewBusinessComponent;
  let fixture: ComponentFixture<SearchNewBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNewBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
