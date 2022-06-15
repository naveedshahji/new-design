import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionUpdaterComponent } from './position-updater.component';

describe('PositionUpdaterComponent', () => {
  let component: PositionUpdaterComponent;
  let fixture: ComponentFixture<PositionUpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionUpdaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
