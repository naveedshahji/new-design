import { Routes, RouterModule } from '@angular/router';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { NgModule } from '@angular/core';

export const reportRoutes: Routes = [
  { path: 'roleManagment', component: RoleManagmentComponent },
  { path: 'userManagment', component: UserManagmentComponent },
  // { path: 'admin',
  //   children: [
  //     { path: 'roleManagment', component: RoleManagmentComponent },
  //     { path: 'userManagment', component: UserManagmentComponent },
  //   ]
  // }
];

 
@NgModule({
  imports: [RouterModule.forChild(reportRoutes)],
  exports: [RouterModule]
})
export class adminRoutingModule { }
// export const adminRoutingModule = RouterModule.forChild(reportRoutes);
