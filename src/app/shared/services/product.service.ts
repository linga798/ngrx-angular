import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

getProducts(): Observable<IProduct[]> {
  return this.http.get<IProduct[]>("https://fakestoreapi.com/products")
  .pipe(
    map(products =>  
      products.map(product => 
        {return {...product, quantity: 1}}
      )
    )
  )
}
}
