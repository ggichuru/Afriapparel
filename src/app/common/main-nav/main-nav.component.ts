import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoryService } from '../service/category.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  loginStatus: Observable<boolean>;
  role: Observable<string>;

constructor(
  private breakpointObserver: BreakpointObserver,
  private categoryService: CategoryService,
  private loginService: LoginService
  ) {}


  ngOnInit(): void {
  }

  private getCategories() {
    
  }

}
