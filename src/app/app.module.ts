import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ValuationHomeComponent } from './valuation/valuation-home/valuation-home.component';
import { ValuationModelComponent } from './valuation/valuation-model/valuation-model.component';
import { ConfigureRcfComponent } from './reporting/configure-rcf/configure-rcf.component';
import { PageErrorComponent } from './page-error/page-error.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
 
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageHeaderComponent,
    PageFooterComponent,
    ValuationHomeComponent,
    ValuationModelComponent,
    ConfigureRcfComponent,
    PageErrorComponent
  ],
  imports: [
    ToastModule,
    BrowserModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [MainMenuComponent,
    PageHeaderComponent,
    PageFooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
