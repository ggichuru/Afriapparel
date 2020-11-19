import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserProductService } from '../service/user-product.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  quantity: FormControl;
  productDetails: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private productService: UserProductService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.quantity = new FormControl('1');
    this.route.paramMap.subscribe((data) => {
      this.productService.getProductById(data.get('id')).subscribe((result) => {
        this.productDetails = result.data;
      });
    });
  }

}
