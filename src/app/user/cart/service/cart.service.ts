import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResponse } from 'src/app/common/service/loginResponse';
import { APP_CONFIG } from 'src/app/material-shared/AppConfig';
import { IAppConfig } from 'src/app/material-shared/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  // tslint:disable: typedef
  getUserCart() {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/cart');
  }

  addProductToCart(product: any) {
    return this.http.post<IResponse>(this.appConfig.apiEndpoint + '/cart', product);
  }

  addProductToCheckOut(product: any) {
    this.products.next(product);
  }

  getProductForCheckOut() {
    return this.products.asObservable();
  }

  // clearCart(product: any) {
  //   return this.http.post<IResponse>(this.appConfig.apiEndpoint + '/cart/updateCart', product);
  // }
  clearCart() {
    return this.http.delete<IResponse>(this.appConfig.apiEndpoint + '/cart');
  }

  // tslint:disable-next-line: variable-name
  deleteOne() {
    return this.http.delete<IResponse>(this.appConfig.apiEndpoint + '/cart/:_id');
  }
}
