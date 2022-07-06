import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfDocAllComponent } from './cf-doc-all.component';

describe('CfDocAllComponent', () => {
  let component: CfDocAllComponent;
  let fixture: ComponentFixture<CfDocAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfDocAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfDocAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
