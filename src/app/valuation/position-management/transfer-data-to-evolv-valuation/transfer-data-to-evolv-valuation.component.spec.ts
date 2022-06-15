import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDataToEvolvValuationComponent } from './transfer-data-to-evolv-valuation.component';

describe('TransferDataToEvolvValuationComponent', () => {
  let component: TransferDataToEvolvValuationComponent;
  let fixture: ComponentFixture<TransferDataToEvolvValuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferDataToEvolvValuationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDataToEvolvValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
