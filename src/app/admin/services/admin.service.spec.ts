/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {AdminService} from './admin.service';
import { ApiService } from './api.service'; 

describe('adminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminService,
        {
          provide: ApiService
        }
      ]
    });
  });

  it('should ...', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));

});
