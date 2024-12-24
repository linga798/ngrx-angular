import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true
})
export class ProductCardComponent implements OnInit {
  @Input() product:IProduct;
  @Output() handleAddToCart = new EventEmitter<IProduct>();
  constructor(){

  }
  ngOnInit(): void {
    
  }
  addToCart(product: IProduct){
    this.handleAddToCart.emit(product);
  }
}
