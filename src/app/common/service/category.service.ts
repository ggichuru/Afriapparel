import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '../../material-shared/AppConfig';
import { IAppConfig } from '../../material-shared/IAppConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  // tslint:disable-next-line: typedef
  getCategories() {
    return this.http.get(this.appConfig.apiEndpoint + '/category');
  }

  // tslint:disable-next-line: typedef
  postCategories(category: any) {
    return this.http.post(this.appConfig.apiEndpoint + '/category', category);
  }
}
