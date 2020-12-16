import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IResponse } from 'src/app/common/service/loginResponse';
import { APP_CONFIG } from 'src/app/material-shared/AppConfig';
import { IAppConfig } from 'src/app/material-shared/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  // tslint:disable: typedef
  addProduct(imageUrl: File, product: any) {
    const formData = new FormData();

    formData.append('imageUrl', imageUrl, imageUrl.name);
    formData.append('productName', product.productName);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('price', product.price);

    return this.http.post<IResponse>(this.appConfig.apiEndpoint + '/product', formData);
  }

  getProductList() {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/product');
  }
}
