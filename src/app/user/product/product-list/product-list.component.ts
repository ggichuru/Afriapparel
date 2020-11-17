import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserProductService } from '../service/user-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: any;
  @Input() categoryName: string;
  @Input() productCount: number;
  constructor(
    private productServce: UserProductService
  ) { }

  ngOnInit(): void {
  }

}
