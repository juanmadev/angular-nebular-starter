import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbDialogModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { BOLoadingDialogComponent } from './loading-dialog.component';

@NgModule({
    imports: [
        ThemeModule,
        NbCardModule,
        NbSpinnerModule,
        NbDialogModule.forChild(),
    ],
    declarations: [
        BOLoadingDialogComponent,
    ],
    entryComponents: [
        BOLoadingDialogComponent,
    ],
})
export class BOLoadingDialogModule {
}
