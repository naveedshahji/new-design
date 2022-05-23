import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuationHomeComponent } from './valuation/valuation-home/valuation-home.component';
import { ValuationModelComponent } from './valuation/valuation-model/valuation-model.component';
const routes: Routes = [
  {
    path: 'valuation/home',
    component: ValuationHomeComponent
  },
  {
    path: 'valuation/model',
    component: ValuationModelComponent
  },
  { path: '',   redirectTo: '/valuation/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
