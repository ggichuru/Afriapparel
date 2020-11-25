import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserProductService } from './service/user-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any;
  category: string;
  productCount: number;

  constructor(
    private route: ActivatedRoute,
    private productService: UserProductService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      map(params => params.get('category'))
    )
    .subscribe((data) => {
      if (data != null) {
        this.category = data;
        this.productService.getAllProducts().subscribe((result) => {
          this.products = result.data;
          this.productCount = result.count;
        });
      } else {
        this.category = 'All';
        this.productService.getAllProducts().subscribe((result) => {
          this.products = result.data;
          this.productCount = result.data.length;
        });
      }
    });
  }

}
