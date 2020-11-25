import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONFIG } from 'src/app/material-shared/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: any): void{
    if (error != null || error !== '') {
      const http = this.injector.get(HttpClient);
      const appConfig = this.injector.get(APP_CONFIG);
      const snackBar = this.injector.get(MatSnackBar);
      const errorMessage = JSON.stringify(error.message);

      http.post(appConfig.apiEndpoint + '/errorLog', {error: errorMessage}).subscribe((result) => {
        snackBar.open('There is some problem performing this operation, please try again!', 'Error!', {
          duration: 1500
        });
      });
    }
  }
}
