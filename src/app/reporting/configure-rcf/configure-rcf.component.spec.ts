import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureRcfComponent } from './configure-rcf.component';

describe('ConfigureRcfComponent', () => {
  let component: ConfigureRcfComponent;
  let fixture: ComponentFixture<ConfigureRcfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureRcfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureRcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
