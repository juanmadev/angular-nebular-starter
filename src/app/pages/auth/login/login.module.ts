import { BOLoginRoutingModule } from './login-routing.module';
import { BOLoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbIconModule,
    BOLoginRoutingModule,
  ],
  declarations: [
    BOLoginComponent,
  ],
  exports: [
    BOLoginComponent,
  ],
})
export class BOLoginModule { }
