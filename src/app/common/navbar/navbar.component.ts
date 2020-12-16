import { Component, OnInit, Optional } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IResponse } from '../service/loginResponse';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { CartService } from 'src/app/user/cart/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginStatus$: Observable<boolean>;
  role$: Observable<string>;
  cart$: Observable<IResponse>;
  categories: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    @Optional() private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router
  ) { }
 // tslint:disable: typedef
  ngOnInit() {
    this.loginStatus$ = this.loginService.isLoggedIn();
    this.role$ = this.loginService.userRole();
    this.getCategories();
    if (this.cartService) {
      this.cart$ = this.cartService.getUserCart();
    }
  }


  private getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result.data;
    });
  }

  logout() {
    sessionStorage.clear();
    this.loginService.isLoggedIn(false);
    this.loginService.userRole('');
    this.router.navigate(['/login']);
  }

  getProduct(categoryName: string) {
    this.router.navigate(['/user/product'], { queryParams: { category: categoryName } });
  }
}
