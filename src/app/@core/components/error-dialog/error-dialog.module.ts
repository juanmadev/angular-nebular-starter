import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { BOErrorDialogComponent } from './error-dialog.component';
import { NbDialogModule, NbCardModule } from '@nebular/theme';

@NgModule({
    imports: [
        ThemeModule,
        NbCardModule,
        NbDialogModule.forChild(),
    ],
    declarations: [
        BOErrorDialogComponent,
    ],
    entryComponents: [
        BOErrorDialogComponent,
    ],
})
export class BOErrorDialogModule {
}
