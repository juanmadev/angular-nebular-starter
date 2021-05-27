import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BOCoreService } from '../../@core/services/bo-core.service';
import { BOApiConstants } from '../../commons/constants/bo.api.constants';

/**
 * Servicio encargado de tratar las llamadas a la API
 */
@Injectable(
    { providedIn: 'root' },
)
export class BOApiService {

    constructor(
        private boCoreSrvc: BOCoreService,
    ) {

    }

    getTestRs(txId: string): Observable<any> {
        const epName = BOApiConstants.API_BASE_ENDPOINT;
        return this.boCoreSrvc.getRQ<any>(epName);
    }
}