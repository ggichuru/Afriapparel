import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal-v4';
import { CartService } from '../cart/service/cart.service';
import { OrderService } from '../order/service/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public payPalConfig?: PayPalConfig;
  products = [];
  total: number;
  shippingAddress: FormGroup;
  displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'total'];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initConfig();

    this.shippingAddress = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
    });

    this.cartService.getProductForCheckOut().subscribe((productList) => {
      this.products = productList;
      this.total = productList.map(p => p.quantity * p.price).reduce((total: any, price: any) =>
        total + price, 0
      );
    });
  }
// tslint:disable:typedef
  private initConfig(): void  {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AVeyGgPZ4vtO7vi0eyw6PnL2o27hw_jjIbFT3sqT341BljP_AQYbSrbjZJakhJurGDM8nF3YdUFCRduh'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (paymentInfo, actions) => {
        console.log('OnPaymentComplete');
        console.log(paymentInfo);
        console.log(actions);
        this.placeOrder(paymentInfo);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
        console.log(err);
      },
      transactions: [{
        amount: {
          currency: 'KES',
          total: this.total
        }
      }]
    });
  }

  placeOrder(paymentData: any) {
    const order = {
      products: this.products,
      shippingAddress: this.shippingAddress.getRawValue(),
      paymentInfo: paymentData,
      total: this.total
    };
    this.orderService.placeOrder(order).subscribe((result) => {
      this.router.navigate(['/user/order', result.data]);
    });
  }

}
