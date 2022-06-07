import { Routes, RouterModule } from '@angular/router';
import { ConfigureRcfComponent } from './configure-rcf/configure-rcf.component';

export const reportRoutes: Routes = [
  { path: 'reporting',
    children: [
      { path: 'configurercf', component: ConfigureRcfComponent }
    ]
  }
];

export const reportingRoutesModule = RouterModule.forChild(reportRoutes);
