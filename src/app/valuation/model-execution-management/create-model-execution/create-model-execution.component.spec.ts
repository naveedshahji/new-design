import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelExecutionComponent } from './create-model-execution.component';

describe('CreateModelExecutionComponent', () => {
  let component: CreateModelExecutionComponent;
  let fixture: ComponentFixture<CreateModelExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModelExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModelExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
