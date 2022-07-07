import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateDiscountScenarioComponent } from './discount-scenario-management/create-discount-scenario/create-discount-scenario.component';
import { SearchDiscountScenarioComponent } from './discount-scenario-management/search-discount-scenario/search-discount-scenario.component';
import { CreateModelExecutionComponent } from './model-execution-management/create-model-execution/create-model-execution.component';
import { SearchModelExecutionComponent } from './model-execution-management/search-model-execution/search-model-execution.component';
import { CreateNewBusinessComponent } from './new-business-management/create-new-business/create-new-business.component';
import { SearchNewBusinessComponent } from './new-business-management/search-new-business/search-new-business.component';
import { PositionUpdaterComponent } from './position-management/position-updater/position-updater.component';
import { SearchPositionDataComponent } from './position-management/search-position-data/search-position-data.component';
import { TransferDataToEvolvValuationComponent } from './position-management/transfer-data-to-evolv-valuation/transfer-data-to-evolv-valuation.component';
import { UploadPositionFileComponent } from './position-management/upload-position-file/upload-position-file.component';
import { ValuationAssumptionComponent } from './assumption/valuation-assumption.component';
import { ValuationCohortComponent } from './cohort/valuation-cohort.component';
import { ValuationHomeComponent } from './home/valuation-home.component';
import { ValuationModelComponent } from './model/valuation-model.component';
export const reportRoutes: Routes = [
      { path: 'CreateDiscountScenario', component: CreateDiscountScenarioComponent },
      { path: 'SearchDiscountScenario', component: SearchDiscountScenarioComponent },
      { path: 'SearchNewBusiness', component: SearchNewBusinessComponent },
      { path: 'CreateModelExecution', component: CreateModelExecutionComponent },
      { path: 'SearchModelExecution', component: SearchModelExecutionComponent },
      { path: 'CreateNewBusiness', component: CreateNewBusinessComponent },
      { path: 'PositionUpdater', component: PositionUpdaterComponent },
      { path: 'TransferDataToEvolvValuation', component: TransferDataToEvolvValuationComponent },
      { path: 'UploadPositionFile', component: UploadPositionFileComponent },
      { path: 'Assumption', component: ValuationAssumptionComponent },
      { path: 'Cohort', component: ValuationCohortComponent },
      { path: 'Home', component: ValuationHomeComponent },
      { path: 'Model', component: ValuationModelComponent },
      { path: 'SearchPositionData', component: SearchPositionDataComponent }
];
@NgModule({
  imports: [RouterModule.forChild(reportRoutes)],
  exports: [RouterModule]
})
export class valuationRoutesModule { }
//export const valuationRoutesModule = RouterModule.forChild(reportRoutes);
