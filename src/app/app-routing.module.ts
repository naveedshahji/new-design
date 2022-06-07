import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuationHomeComponent } from './valuation/valuation-home/valuation-home.component';
import { ValuationModelComponent } from './valuation/valuation-model/valuation-model.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { InstrumentBrowserComponent } from './accounting/instrument-browser/instrument-browser.component';
import { ValuationCohortComponent } from './valuation/valuation-cohort/valuation-cohort.component';
import { SearchPositionDataComponent } from './valuation/position-management/search-position-data/search-position-data.component';
import { UploadPositionFileComponent } from './valuation/position-management/upload-position-file/upload-position-file.component';

const routes: Routes = [
  {
    path:'valuation',
    children: [
      {
        path:'home', component: ValuationHomeComponent
      },
      {
        path:'position-management/search-position-data', component: SearchPositionDataComponent
      },
      {
        path:'position-management/upload-position-file', component: UploadPositionFileComponent
      },
      {
        path:'model', component: ValuationModelComponent
      },
      {
        path:'cohort', component: ValuationCohortComponent
      }
    ]
  },
  {
    path: 'accounting/instrument-browser',
    component: InstrumentBrowserComponent
  },
  { path: '',   redirectTo: '/valuation/home', pathMatch: 'full' },
  { path: '**', component: PageErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
