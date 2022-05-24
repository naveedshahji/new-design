import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuationHomeComponent } from './valuation/valuation-home/valuation-home.component';
import { ValuationModelComponent } from './valuation/valuation-model/valuation-model.component';
import { ConfigureRcfComponent } from './reporting/configure-rcf/configure-rcf.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
    path: 'valuation/home',
    component: ValuationHomeComponent
  },
  {
    path: 'valuation/model',
    component: ValuationModelComponent
  },
  {
    path: 'reporting/configurercf',
    component: ConfigureRcfComponent
  },
  { path: '',   redirectTo: '/valuation/home', pathMatch: 'full' },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
