import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserProductService } from '../service/user-product.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartService } from '../../cart/service/cart.service';
import { WishlistService } from '../../wishlist/service/wishlist.service';

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
    private cartService: CartService,
    private wishListService: WishlistService
  ) { }

  ngOnInit(): void {
    this.quantity = new FormControl('1');
    this.route.paramMap.subscribe((data) => {
      this.productService.getProductById(data.get('id')).subscribe((result) => {
        this.productDetails = result.data;
      });
    });
  }

  // tslint:disable: typedef
  addToCart(productDetails: any) {
    const productData = {
      productId: productDetails,
      quantity: this.quantity.value
    };
    this.cartService.addProductToCart(productData).subscribe((result) => {
      this.snackBar.open('Product Added to Cart!', 'Product', {
        duration: 1000
      });
    });
  }

  addToWishList(productId: any) {
    this.wishListService.addProductToWishList(productId)
      .subscribe((result) => {
        this.snackBar.open('Product Added to WishList!', 'Product', {
          duration: 1000
        });
      });
  }

}
