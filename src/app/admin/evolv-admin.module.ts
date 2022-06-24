import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { adminModule } from './admin.routing'
import {TableModule} from 'primeng/table';
import { RouterTestingModule } from "@angular/router/testing";
import {HttpClientModule} from '@angular/common/http';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoleManagmentComponent],
  imports: [
    CommonModule,
    TableModule,
    adminModule,
    RouterTestingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class EvolvAdminModule { }
