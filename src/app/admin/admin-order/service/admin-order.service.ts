import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IResponse } from 'src/app/common/service/loginResponse';
import { APP_CONFIG } from 'src/app/material-shared/AppConfig';
import { IAppConfig } from 'src/app/material-shared/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  // tslint:disable: typedef
  getAllOrders() {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/order/admin');
  }

  updateOrderDetails(orderDetails: any) {
    return this.http.put<IResponse>(this.appConfig.apiEndpoint + '/order', orderDetails );
  }

  getOrderDetails(orderId: any) {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/order/' + orderId);
  }
}
