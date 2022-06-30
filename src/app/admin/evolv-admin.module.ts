import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { adminModule } from './admin.routing'
import {TableModule} from 'primeng/table';
import { RouterTestingModule } from "@angular/router/testing";
import {HttpClientModule} from '@angular/common/http';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './services/admin.service';
import { ApiService } from './services/api.service';

import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} 
      from '@angular/platform-browser/animations';
@NgModule({
  declarations: [RoleManagmentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    adminModule,
    RouterTestingModule,
    HttpClientModule,
    FormsModule,ButtonModule,MessagesModule,ConfirmDialogModule
  ],
  providers: [AdminService, ApiService],
  exports: [RouterModule]
})
export class EvolvAdminModule { }
