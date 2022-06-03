import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentBrowserComponent } from './instrument-browser.component';

describe('InstrumentBrowserComponent', () => {
  let component: InstrumentBrowserComponent;
  let fixture: ComponentFixture<InstrumentBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
