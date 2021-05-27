import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { BOUtilsService } from './bo-utils.service';
import { Observable, throwError } from 'rxjs';
import { BOApiConstants } from '../../commons/constants/bo.api.constants';
import { map, catchError } from 'rxjs/operators';
import { BOErrorRS } from '../../models/error-rs/error-rs.model';
import { BOConfigService } from './bo-config.service';

@Injectable({ providedIn: 'root' })
export class BOCoreService {

    constructor(private http: HttpClient,
        private configSrvc: BOConfigService,
        private utilSrvc: BOUtilsService,
    ) {
    }

    getRQ<T>(epName, req?, params?, responseType?: 'blob' | 'json' | 'text'): Observable<T> {
        return this.standardRQ<T>('GET', epName, undefined, req, params, responseType);
    }

    postRQ<T>(epName, body, req?): Observable<T> {
        return this.standardRQ<T>('POST', epName, body, req);
    }

    deleteRQ<T>(epName, body, req?): Observable<T> {
        return this.standardRQ<T>('DELETE', epName, body, req);
    }

    putRQ<T>(epName, body, req?): Observable<T> {
        return this.standardRQ<T>('PUT', epName, body, req);
    }

    private standardRQ<T>(
        method: string = 'GET', epName: string, body?: any, requ?: HttpHeaders, params?: HttpParams, responseType?): Observable<T> {
        const url = `${BOApiConstants.API_BASE_ENDPOINT}${epName}`;
        const req: HttpRequest<any> = new HttpRequest(method, url, body, { headers: requ, params: params, responseType: responseType });
        return this.http.request(req)
            .pipe(
                map((res: any) => {
                    if (res && res.headers) {
                        console.log(`Respuesta correcta a ${epName}`, res);
                        const resAuthHeader = res.headers.get('authorization');
                        const jwtToken = resAuthHeader && resAuthHeader.replace('Bearer', '').trim();
                        if (jwtToken) {
                            this.configSrvc.updateJwtToken(jwtToken);
                        }
                        return responseType === 'blob' ? res : res.body;
                    }
                }),
                catchError((err) => {
                    console.error(err);
                    let error: any;
                    const errorTitle = 'Ha ocurrido un error';
                    let errorContent = '';
                    if (err.error && err.error.error) {
                        error = err.error;
                        errorContent = `${error.error.message} - ${error.error.description}`;
                    } else {
                        error = err.error;
                        errorContent = error;
                    }
                    this.handleError(error, errorTitle, errorContent);
                    return throwError(err.error);
                }),
            );
    }

    handleError(error: BOErrorRS, errorTitle: string, errorContent: string) {
        switch (error.error.code) {
            // TODO: Implementar en caso de ser necesario el tratamiento de errores
            default:
                this.utilSrvc.showErrorDialog(errorTitle, errorContent);
                break;
        }
    }
}
