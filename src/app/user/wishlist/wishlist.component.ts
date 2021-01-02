import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CartService } from '../cart/service/cart.service';
import { WishlistService } from './service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  @ViewChild('wishListTable') wishListTable: MatTable<any>;

  wishList = [];
  displayedColumns: string[] = ['imageUrl', 'productName', 'price', 'actions'];

  constructor(
    private wishListService: WishlistService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.wishListService.getWishList()
      .subscribe(result => {
        result.data.forEach((product: any) => {
          this.wishList.push(product.UserWishList[0]);
        });
        this.wishListTable.dataSource = this.wishList;
        this.wishListTable.renderRows();
       // this.dataSource = this.wishListTable.dataSource;
      });
  }

  // tslint:disable: typedef
  delete(val) {
    console.log(val);
    this.wishList.splice(this.wishList.indexOf(val), 1);
    this.wishListTable.renderRows();
  }

  addToCart() {
    this.cartService.addProductToCart(this.wishList);
    //
  }
}
