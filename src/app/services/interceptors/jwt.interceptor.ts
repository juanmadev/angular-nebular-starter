import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { BOConfigService } from '../../@core/services/bo-config.service';
import { BODialogService } from '../../@core/services/bo-dialog.service';


@Injectable()
export class BOJwtInterceptor implements HttpInterceptor {

    constructor(
        private configSrvc: BOConfigService,
        private dialogService: BODialogService,
    ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.dialogService.appLoaded) {
            this.dialogService.collectRequest(request);
        }
        const token = this.configSrvc.currentTokenValue;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        console.log('Entrando en el interceptor BOJwtInterceptor', request);
        return next.handle(request)
            .pipe(
                map(resp => {
                    if (resp instanceof HttpResponse || resp instanceof HttpErrorResponse) {
                        return resp;
                    }
                }),
                finalize(() => {
                    if (this.dialogService.appLoaded) {
                        this.dialogService.dropRequest(request);
                    }
                }),
            );
    }
}
