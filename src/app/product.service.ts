import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './components/product-index/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000/products';

  constructor(private http:  HttpClient) { }

  addProduct(product_name, product_price, product_cost){
    const obj = {
      product_name: product_name,
      product_price: product_price,
      product_cost: product_cost
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getProducts(){
    return this
      .http
      .get(`${this.uri}`);
  }

  editProduct(id){
    return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(product_name, product_price, product_cost, id){
    const obj = {
      product_name: product_name,
      product_price: product_price,
      product_cost: product_cost
    };
    let promise = new Promise((resolve, reject) => {
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .toPromise()
        .then(
          res => {
            console.log("Done");
            resolve();
          }
        )
    });
    return promise;
  }
  deleteProduct(id){
    return this
        .http
        .get(`${this.uri}/delete/${id}`);
  }
}
