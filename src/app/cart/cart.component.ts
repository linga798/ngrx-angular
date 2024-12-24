import { Component, OnInit } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/product.interface';
import { selectCartProducts, selectCartTotalPrice } from '../states/cart/cart.selector';
import { AsyncPipe } from '@angular/common';
import { decrementProduct, incrementProduct, removeProduct } from '../states/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [AsyncPipe]
})
export class CartComponent implements OnInit {

  cartItems$: Observable<IProduct[]>;
  cartTotalPrice$: Observable<number>;

  constructor(private store:Store<AppState>) { 
    this.cartItems$ = this.store.select(selectCartProducts);
    this.cartTotalPrice$ = this.store.select(selectCartTotalPrice);

  }
  ngOnInit() {
  }

  decreaseProduct(productId: number){
    this.store.dispatch(decrementProduct({productId}));
  }

  increaseProduct(productId: number){
    this.store.dispatch(incrementProduct({productId}));

  }
  
  removeItem(productId: number){
    this.store.dispatch(removeProduct({productId}));
  }

}
