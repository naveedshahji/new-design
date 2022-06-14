import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { reportingRoutesModule } from '../reporting.routing'
// import { NodeService } from './nodeservice';
import {TreeModule} from 'primeng/tree'
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { ConfigureRcfComponent } from '../configure-rcf/configure-rcf.component';
import {TableModule} from 'primeng/table';
import { RouterTestingModule } from "@angular/router/testing";
import { TreenodeserviceService } from '../evolv-reporting/treenodeservice.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ConfigureRcfComponent,LeftSidebarComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TreeModule,
    reportingRoutesModule,
    RouterTestingModule,
    HttpClientModule
  ],
  providers: [TreenodeserviceService],
  exports: [RouterModule]
})
export class EvolvReportingModule { }
