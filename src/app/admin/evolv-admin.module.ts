import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { adminRoutingModule } from './admin.routing'
import {TableModule} from 'primeng/table';
import { RouterTestingModule } from "@angular/router/testing";
import {HttpClientModule} from '@angular/common/http';
import { RoleManagmentComponent } from './role-managment/role-managment.component';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from './services/admin-api.service';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UserManagmentComponent } from './user-managment/user-managment.component';

import { StoreModule } from '@ngrx/store'; 
 
import { adminReducer } from './store/admin.reducer'; 

import { EffectsModule } from '@ngrx/effects';
import { adminEffects } from './store/admin.effects';
@NgModule({
  declarations: [RoleManagmentComponent, UserManagmentComponent],
  imports: [
    CommonModule,
    TableModule,
    adminRoutingModule,
    RouterTestingModule,
    HttpClientModule,
    FormsModule,ButtonModule,MessagesModule,ConfirmDialogModule,
    StoreModule.forRoot({admin: adminReducer}),
    HttpClientModule,
    EffectsModule.forRoot([adminEffects])
  ],
  providers: [AdminApiService],
  exports: [RouterModule]
})
export class EvolvAdminModule {  constructor(){
  console.log("in admin module");
}}
