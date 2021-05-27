import { NbDialogService } from '@nebular/theme';
import { Injectable } from '@angular/core';
import { BOErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({ providedIn: 'root' })
export class BOUtilsService {

    constructor(
        private dialogService: NbDialogService,
    ) { }

    showErrorDialog(title: string, content: string) {
        this.dialogService.open(BOErrorDialogComponent, {
            context: {
                title: title,
                contents: [content],
            },
        });
    }

}
