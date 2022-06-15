import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBusinessComponent } from './create-new-business.component';

describe('CreateNewBusinessComponent', () => {
  let component: CreateNewBusinessComponent;
  let fixture: ComponentFixture<CreateNewBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
