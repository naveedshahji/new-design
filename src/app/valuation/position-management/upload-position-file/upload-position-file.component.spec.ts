import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPositionFileComponent } from './upload-position-file.component';

describe('UploadPositionFileComponent', () => {
  let component: UploadPositionFileComponent;
  let fixture: ComponentFixture<UploadPositionFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPositionFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPositionFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
