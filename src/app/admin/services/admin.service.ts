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
  deleteRoleById(url:any, id: number): Observable<any> {
    return this.api.deleteRoleById(url, id);
  }

  // Simulate PUT /Admins/:id
  // updateAdmin(admin: any): Observable<any> {
  //   return this.api.updateAdmin(admin);
  // }

  // Simulate GET /Admins
  getAllRoles(url:any): Observable<any> {
    return this.api.getAllRoles(url);
  }

  // Simulate GET /Admins/:id
  getAdminById(adminId: number): Observable<any> {
    return this.api.getAdminById(adminId);
  }

  // Toggle complete
  updateRole(url: any, role: any) {
    return this.api.updateRole(role, url);
  }

}
