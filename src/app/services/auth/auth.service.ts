import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BOApiConstants } from '../../commons/constants/bo.api.constants';
import { BOCoreService } from '../../@core/services/bo-core.service';
import { BOConfigService } from '../../@core/services/bo-config.service';


@Injectable({ providedIn: 'root', useClass: BOAuthenticationService })
export class BOAuthenticationService {

    // tslint:disable-next-line: max-line-length
    mockToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOnsiaWQiOiJ1c2VyLWp1YW5tYSIsIm5hbWUiOiJhZG1pbiIsInN1cm5hbWUiOiJtYWNpYXMiLCJ1c2VybmFtZSI6Imp1YW5tYSIsImVtYWlsIjoianVhbm1hQGp1YW5tYS5jb20iLCJlbmFibGVkIjp0cnVlLCJpbml0RGF0ZSI6IjIwMTktMDUtMjdUMDA6MDA6MDAuMDAwWiIsInBhc3N3b3JkIjoiJDJiJDEyJFF1S3FZdFpvU2YzbFRvaFZsRVVzVmV1NzhwUmU3WEJHM1pZWGNTMERFMjg2Z1h6OVVXb1RTIiwiZ3JvdXBzIjpbImdyb3VwLWFkbWluaXN0cmF0b3JzIl0sInJpY2hHcm91cHMiOlt7ImlkIjoiZ3JvdXAtYWRtaW5pc3RyYXRvcnMiLCJuYW1lIjoiQWRtaW5pc3RyYXRvcnMgR3JvdXAiLCJyb2xlcyI6W3siaWQiOiJyb2xlLW1hbmFnZXIiLCJuYW1lIjoiUm9sZSBNYW5hZ2VyIiwiZnVuY3Rpb25hbGl0aWVzIjpbImNyZWF0ZVJvbGUiLCJ1cGRhdGVSb2xlIiwiZ2V0Um9sZUJ5SWQiLCJnZXRBbGxSb2xlcyIsImRlbGV0ZVJvbGVCeUlkIiwiYWRkRnVuYzJSb2xlIiwiZGVsRnVuYzJSb2xlIl19LHsiaWQiOiJyb2xlLXVzZXItbWFuYWdlciIsIm5hbWUiOiJVc2VyIE1hbmFnZXIiLCJmdW5jdGlvbmFsaXRpZXMiOlsiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJnZXRVc2VyQnlJZCIsImdldFVzZXJzIiwiZGVsZXRlVXNlckJ5SWQiLCJhZGRHcm91cDJVc2VyIl19LHsiaWQiOiJyb2xlLWdyb3VwLW1hbmFnZXIiLCJuYW1lIjoiR3JvdXAgTWFuYWdlciIsImZ1bmN0aW9uYWxpdGllcyI6WyJjcmVhdGVHcm91cCIsInVwZGF0ZUdyb3VwIiwiZ2V0R3JvdXBCeUlkIiwiZ2V0QWxsR3JvdXBzIiwiZGVsZXRlR3JvdXBCeUlkIl19LHsiaWQiOiJyb2xlLWNhbXBhaWduLW1hbmFnZXIiLCJuYW1lIjoiQ2FtcGFpZ24gTWFuYWdlciIsImZ1bmN0aW9uYWxpdGllcyI6WyJjcmVhdGVDYW1wYWlnbiIsInVwZGF0ZUNhbXBhaWduIiwiZ2V0Q2FtcGFpZ25CeUlkIiwiZ2V0Q2FtcGFpZ25zIiwiZGVsZXRlQ2FtcGFpZ25CeUlkIl19LHsiaWQiOiJyb2xlLXdhbGxldC1tYW5hZ2VyIiwibmFtZSI6IldhbGxldCBNYW5hZ2VyIiwiZnVuY3Rpb25hbGl0aWVzIjpbImNyZWF0ZVdhbGxldCIsImdldFdhbGxldEJ5VXNlcklkIiwiZ2V0V2FsbGV0QmFsYW5jZSIsImRlbGV0ZVdhbGxldEJ5VXNlcklkIl19LHsiaWQiOiJyb2xlLWNvdXBvbi1tYW5hZ2VyIiwibmFtZSI6IkNvdXBvbiBNYW5hZ2VyIiwiZnVuY3Rpb25hbGl0aWVzIjpbImNyZWF0ZUNvdXBvbnMiLCJnZXRDb3Vwb25zIiwiZ2V0Q291cG9uc0JhdGNoIiwiZ2V0QmF0Y2hCeUlkIl19XX1dfSwiaWF0IjoxNTcwNzE3NTU2LCJleHAiOjE1NzA3MTkzNTZ9.YueE6i-Ahut38z66cnhQpbTmXiZy6jgcPbOw-xzUv94';


    constructor(
        private http: HttpClient,
        private boCoreSrvc: BOCoreService,
        private boConfigSrvc: BOConfigService,
        private router: Router
    ) {

        this.boConfigSrvc.currentUser.subscribe((data) => {
            // if (!(data && data.exp)) { this.router.navigate(['auth/login']); }
        });

    }

    login(username: string, password: string): Observable<any> {
        const body = {};
        const headers = new HttpHeaders({
            'username': username,
            'passwd': password,
        });
        this.boConfigSrvc.updateJwtToken(this.mockToken);

        this.router.navigate(['/main']);
        return of({
            data: 'ok',
        });
        //     return this.boCoreSrvc.postRQ(BOApiConstants.LOGIN, body, headers)
        //         .pipe(
        //             map((res: any) => {
        //                 if (res && res.token) {
        //                     this.boConfigSrvc.updateJwtToken(res.token);
        //                     // this.router.navigate(['/pages/main']);
        //                     return res;
        //                 } else {
        //                     // this.router.navigate(['/auth/login']);
        //                     return res;
        //                 }
        //             }),
        //         );
    }

    logout() {
        this.boConfigSrvc.deleteToken();
        this.router.navigate(['/auth/login']);
    }

}
