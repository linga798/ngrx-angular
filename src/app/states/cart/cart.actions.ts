import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";

export const addToCart = createAction('[Product Component] AddToCart', 
    props<{product:IProduct}>());

export const decrementProduct = createAction('[Product Component] DecrementProduct', 
    props<{productId:number}>());

export const incrementProduct = createAction('[Product Component] IncrementProduct', 
    props<{productId:number}>());

export const removeProduct = createAction('[Product Component] RemoveProduct', 
    props<{productId:number}>());
