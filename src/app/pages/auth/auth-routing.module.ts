
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BOAuthComponent } from './auth.component';
import { BOSecurePageGuard } from '../../services/guards/secure-page.guard';

const routes: Routes = [{
  path: '',
  component: BOAuthComponent,
  // canActivate: [BOSecurePageGuard],
  children: [
    {
      path: 'login',
      loadChildren: () => import('./login/login.module')
        .then(m => m.BOLoginModule),
      canActivate: [BOSecurePageGuard],
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
