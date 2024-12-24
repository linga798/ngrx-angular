import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { IProduct } from '../shared/models/product.interface';
import { ProductService } from '../shared/services/product.service';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { addToCart } from '../states/product/product.actions';
@Component({
  selector: 'app-products',
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: true
})
export class ProductsComponent {
  
  products$:Observable<IProduct[]>;
  constructor(private productSerice:ProductService, private store:Store<AppState>){
   this.products$ = this.productSerice.getProducts();
   console.log('pppp:',this.products$);
  }

  addProductToCart(product: IProduct){
    this.store.dispatch(addToCart({product}))
  }

  // addProductToCart(){
  //   console.log('emitted to parent');
  // }
}
