import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild('cartTable') cartTable: MatTable<any>;
  userCart = [];
  displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'total', 'actions'];

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.getUserCart()
      .subscribe(result => {
        result.data.forEach((product: any) => {
          product.UserCart[0].quantity = product.quantity;
          this.userCart.push(product.UserCart[0]);
        });
        this.cartTable.dataSource = this.userCart;
        this.cartTable.renderRows();
      });
  }

  // tslint:disable: typedef
  checkOut() {
    this.cartService.addProductToCheckOut(this.userCart);
    this.router.navigate(['/user/payment']);
  }

  delete(val) {
    console.log(val);
    this.userCart.splice(this.userCart.indexOf(val), 1);
    this.cartTable.renderRows();
  }

}
