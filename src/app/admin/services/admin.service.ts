import { Injectable } from '@angular/core'; 
import { ApiService } from './api.service';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /Admins
  addAdmin(admin: any): Observable<any> {
    return this.api.createAdmin(admin);
  }

  // Simulate DELETE /Admins/:id
  deleteAdminById(adminId: number): Observable<any> {
    return this.api.deleteAdminById(adminId);
  }

  // Simulate PUT /Admins/:id
  updateAdmin(admin: any): Observable<any> {
    return this.api.updateAdmin(admin);
  }

  // Simulate GET /Admins
  getAllRoles(): Observable<any[]> {
    return this.api.getAllRoles();
  }

  // Simulate GET /Admins/:id
  getAdminById(adminId: number): Observable<any> {
    return this.api.getAdminById(adminId);
  }

  // Toggle complete
  toggleAdminComplete(admin: any) {
    admin.complete = !admin.complete;
    return this.api.updateAdmin(admin);
  }

}
