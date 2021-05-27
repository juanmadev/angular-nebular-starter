import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BOConfigService } from '../../@core/services/bo-config.service';
import { BOTokenRS } from '../../models/token-rs/token-rs.model';

@Injectable({ providedIn: 'root' })
export class BOSecurePageGuard implements CanActivate {
    constructor(
        private router: Router,
        private configSrvc: BOConfigService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser: BOTokenRS = this.configSrvc.currentUserValue;
        if (currentUser && currentUser.sub) {
            return false;
        }
        // this.router.navigate(['/pages/main']);
        return true;
    }
}
