import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EncDecService } from '@ggichuru/ecom-core';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private encDec: EncDecService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('role') != null) {
      const role = this.encDec.decrypt(sessionStorage.getItem('role'), '');
      if (role === 'admin') {
        return true;
      } else {
        this.navigateToLogin(state);
      }
    } else {
      this.navigateToLogin(state);
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  // tslint:disable: typedef
  navigateToLogin(state: RouterStateSnapshot) {
    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
  }
}
