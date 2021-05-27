import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { BOLoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';

@Injectable({ providedIn: 'root' })
export class BODialogService {

    cachedRequests: Array<HttpRequest<any>> = [];

    private dialogRef: NbDialogRef<BOLoadingDialogComponent>;
    private showingDialog: boolean = false;
    private loadingSubject: BehaviorSubject<boolean>;

    public loadingObs: Observable<boolean>;

    public appLoaded: boolean = false;

    constructor(private dialogService: NbDialogService) {
        this.loadingSubject = new BehaviorSubject<boolean>(false);
        this.loadingObs = this.loadingSubject.asObservable();
    }

    collectRequest(request): void {
        if (this.cachedRequests.length === 0) {
            this.loadingSubject.next(true);
        }
        this.cachedRequests.push(request);
    }

    dropRequest(request): void {
        if (this.cachedRequests.length > 0) {
            this.cachedRequests.pop();
            if (this.cachedRequests.length === 0) {
                this.loadingSubject.next(false);
            }
        }
    }

    showLoadingDialog() {
        if (!this.showingDialog && this.appLoaded) {
            this.dialogRef = this.dialogService.open(BOLoadingDialogComponent, { closeOnBackdropClick: false, closeOnEsc: false });
            this.showingDialog = true;
        }
    }

    closeLoadingDialog() {
        if (this.showingDialog) {
            this.dialogRef.close();
            this.showingDialog = false;
        }
    }
}
