import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { BOAuthComponent } from './auth.component';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    ThemeModule,
    NbLayoutModule,
    NbCardModule,
    CommonModule,
    AuthRoutingModule,
  ],
  declarations: [
    BOAuthComponent,
  ],
})
export class BOAuthModule { }
