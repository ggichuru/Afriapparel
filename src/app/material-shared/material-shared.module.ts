import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { APP_CONFIG } from './AppConfig';
import { IAppConfig } from './IAppConfig';
import { environment } from '../../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


const AppConfig: IAppConfig = {
  apiEndpoint: environment.apiEndPoint
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class MaterialSharedModule { }
