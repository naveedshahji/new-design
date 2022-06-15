import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ValuationHomeComponent } from './valuation/home/valuation-home.component';
import { ValuationModelComponent } from './valuation/model/valuation-model.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { InstrumentBrowserComponent } from './accounting/instrument-browser/instrument-browser.component';
import { ValuationCohortComponent } from './valuation/cohort/valuation-cohort.component';
import { SearchPositionDataComponent } from './valuation/position-management/search-position-data/search-position-data.component';
import { UploadPositionFileComponent } from './valuation/position-management/upload-position-file/upload-position-file.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { EvolvReportingModule } from './reporting/evolv-reporting.module';
import { EvolvValuationgModule } from './valuation/evolv-valuation.module';
import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageErrorComponent,
    InstrumentBrowserComponent
  ],
  imports: [
    ToastModule,
    BrowserModule,
    TableModule,
    EvolvReportingModule,
    EvolvValuationgModule,
    AppRoutingModule
  ],
  providers: [MainMenuComponent,
    PageHeaderComponent,
    PageFooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


