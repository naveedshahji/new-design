import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
 
import {HttpClient} from '@angular/common/http';
describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useFactory: (backend:any, options:any) => {
          return new HttpClient(backend);
        },
          deps: [ ]
        },
        
        
        ApiService
      ]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
