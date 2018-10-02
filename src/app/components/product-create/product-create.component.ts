import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private productservice: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      product_name: ['', Validators.required],
      product_price: ['', Validators.required ],
      product_cost: ['', Validators.required ]

    });
  }

  addProduct(product_name, product_price, product_cost) {
    this.productservice.addProduct(product_name, product_price, product_cost);
  }

  ngOnInit() {
  }

}
