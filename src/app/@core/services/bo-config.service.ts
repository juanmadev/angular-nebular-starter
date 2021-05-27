import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BOTokenRS } from '../../models/token-rs/token-rs.model';
import { BOAppConstants } from '../../commons/constants/bo.app.constants';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class BOConfigService {
    private currentUserSubject: BehaviorSubject<BOTokenRS>;
    public currentUser: Observable<BOTokenRS>;

    private currentTokenSubject: BehaviorSubject<string>;
    public currentToken: Observable<string>;

    constructor(
    ) {
        this.currentUserSubject = new BehaviorSubject<BOTokenRS>(JSON.parse(sessionStorage.getItem(BOAppConstants.SESSION_USER)));
        this.currentTokenSubject = new BehaviorSubject<string>(undefined);
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentToken = this.currentTokenSubject.asObservable();
    }

    updateJwtToken(token: string) {
        this.currentTokenSubject.next(token);
        const info: BOTokenRS = this.getDecodedAccessToken(token);
        this.currentUserSubject.next(info);
    }

    deleteToken() {
        this.currentUserSubject.next(undefined);
    }

    get currentTokenValue(): string {
        return this.currentTokenSubject.value;
    }

    get currentUserValue(): BOTokenRS {
        return this.currentUserSubject.value;
    }

    private getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

}
