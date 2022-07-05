import { Routes, RouterModule } from '@angular/router';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';

export const reportRoutes: Routes = [
  { path: 'admin',
    children: [
      { path: 'roleManagment', component: RoleManagmentComponent },
      { path: 'userManagment', component: UserManagmentComponent },
    ]
  }
];

export const adminModule = RouterModule.forChild(reportRoutes);
