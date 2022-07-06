import { TestBed } from '@angular/core/testing';

import { TreenodeserviceService } from './treenodeservice.service';

describe('TreenodeserviceService', () => {
  let service: TreenodeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreenodeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
