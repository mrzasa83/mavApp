import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  products: Product[];

  constructor(private productservice: ProductService) { }

  deleteProduct(id) {
    this.productservice.deleteProduct(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.productservice
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

}
