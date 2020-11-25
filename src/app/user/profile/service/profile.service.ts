import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/material-shared/AppConfig';
import { IAppConfig } from 'src/app/material-shared/IAppConfig';
import { IResponse } from 'src/app/common/service/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  // tslint:disable: typedef
  getProfile() {
    return this.http.get<IResponse>(this.appConfig.apiEndpoint + '/user');
  }

  updateProfile(userInfo) {
    return this.http.put<IResponse>(this.appConfig.apiEndpoint + '/user', userInfo);
  }
}
