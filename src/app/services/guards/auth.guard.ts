import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BOConfigService } from '../../@core/services/bo-config.service';
import { BOTokenRS } from '../../models/token-rs/token-rs.model';

@Injectable({ providedIn: 'root' })
export class BOAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private configSrvc: BOConfigService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser: BOTokenRS = this.configSrvc.currentUserValue;
        if (currentUser && currentUser.sub) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login']);
        return false;
    }
}
