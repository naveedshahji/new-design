import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPositionDataComponent } from './search-position-data.component';

describe('UploadPositionFileComponent', () => {
  let component: SearchPositionDataComponent;
  let fixture: ComponentFixture<SearchPositionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPositionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPositionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
