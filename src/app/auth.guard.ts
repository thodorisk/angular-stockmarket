import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): boolean {
            if(this._authService.isLoggedIn())
                return true;
            else
                this._router.navigateByUrl('/');
                return false;
        }
}