import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BOAuthGuard } from '../services/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  // canActivate: [BOAuthGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [BOAuthGuard],
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
