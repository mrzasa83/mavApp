import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductIndexComponent } from './components/product-index/product-index.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'productCreate',
    component: ProductCreateComponent
  },
  {
    path: 'productEdit/:id',
    component: ProductEditComponent
  },
  {
    path: 'productIndex',
    component: ProductIndexComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductIndexComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
