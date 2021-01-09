import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Input, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  fileToUpload: File;

  @Input() categories: any;
  @Output() addProduct = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      imageUrl: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      qty: new FormControl('')
    });
  }

  // tslint:disable: typedef
  handleInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  submitProduct() {
    const productData = {
      imageUrl: this.fileToUpload,
      product: this.productForm.value
    };

    this.addProduct.emit(productData);
    this.productForm.reset();
  }
}
