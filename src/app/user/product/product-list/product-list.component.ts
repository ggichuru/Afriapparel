import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UserProductService } from '../service/user-product.service';
import { CategoryService } from 'src/app/common/service/category.service';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Product } from '../product';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: any;
  @Input() categoryName: string;
  @Input() productCount: number;

  @Input() searchText: string;

  number = Math.floor(Math.random() * 10) + 1;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  categories: any;
  constructor(
    private productServce: UserProductService,
    private breakpointObserver: BreakpointObserver,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  // tslint:disable:typedef
  getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result.data;
    });
  }
}
