import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IResponse } from 'src/app/common/service/loginResponse';
import { APP_CONFIG } from 'src/app/material-shared/AppConfig';
import { IAppConfig } from 'src/app/material-shared/IAppConfig';


@Injectable({
  providedIn: 'root'
})
export class UserProductService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  // tslint:disable: typedef
  getAllProducts() {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/product');
  }

  getProductsByCategory(categoryName: string) {
    return this.http.post<IResponse>(this.appConfig.apiEndpoint + '/product/getProductByCategory', {category: categoryName});
  }

  getProductById(id: any) {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/product/' + id);
  }
}
