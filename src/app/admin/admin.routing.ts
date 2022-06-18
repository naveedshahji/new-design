import { Routes, RouterModule } from '@angular/router';
import { RoleManagmentComponent } from './role-managment/role-managment.component';

export const reportRoutes: Routes = [
  { path: 'admin',
    children: [
      { path: 'roleManagment', component: RoleManagmentComponent },
    ]
  }
];

export const adminModule = RouterModule.forChild(reportRoutes);
