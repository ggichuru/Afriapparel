import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncDecService } from '@ggichuru/ecom-core';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanLoad {
  constructor(
    private encDec: EncDecService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('role') != null) {
      const role = this.encDec.decrypt(sessionStorage.getItem('role'), '');
      if (role === 'user') {
        return true;
      } else {
        this.navigateToLogin(state);
      }
    } else {
      this.navigateToLogin(state);
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
// tslint:disable: typedef
  navigateToLogin(state: RouterStateSnapshot) {
    this.router.navigate(['/login'], {queryParams: {returnUrl: state}});
    return false;
  }
}
