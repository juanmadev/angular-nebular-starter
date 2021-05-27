import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'bo-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss'],
})
export class BOErrorDialogComponent {

    @Input() title: string;
    @Input() contents: string[];

    constructor(
        protected ref: NbDialogRef<BOErrorDialogComponent>
    ) { }

    dismiss() {
        this.ref.close();
    }
}
