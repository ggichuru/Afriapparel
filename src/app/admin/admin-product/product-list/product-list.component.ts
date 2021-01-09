import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ['_id', 'category', 'productName', 'price', 'outOfStock', 'imageUrl'];
  @Input() productList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
