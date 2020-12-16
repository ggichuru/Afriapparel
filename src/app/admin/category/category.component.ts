import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  catList: any;

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  // tslint:disable: typedef
  loadCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      if (result.status === 'success') {
        this.catList = result.data;
      }
    });
  }

  saveCategories(category: any) {
    this.categoryService.postCategories(category).subscribe((result) => {
      this.snackBar.open(result.message, 'Category', {
        duration: 1000
      });
      this.loadCategories();
    });
  }
}
