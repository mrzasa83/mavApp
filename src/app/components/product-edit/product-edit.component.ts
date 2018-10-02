import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../product-index/Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
        private productservice: ProductService,
        private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      product_name: ['', Validators.required ],
      product_price: ['', Validators.required ],
      product_cost: ['', Validators.required ]
    });
  }

  updateProduct(product_name, product_price, product_cost){
    this.route.params.subscribe(params => {
      this.productservice.updateProduct(product_name, product_price, product_cost, params['id']);
      this.router.navigate(['index']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productservice.editProduct(params['id']).subscribe(res => {
        this.product = res;
    });
  });
  }

}
