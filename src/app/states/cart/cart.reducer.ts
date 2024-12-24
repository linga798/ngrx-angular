import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import { addToCart, decrementProduct, incrementProduct, removeProduct } from "./cart.actions";

export interface CartState {
    products: IProduct[],
    totalPrice: number
}

export const InitialCartState: CartState = {
    products: [],
    totalPrice: 0
}

export function calculateTotalPrice(products:IProduct[]): number{
   return products.reduce((totalPrice, product) => totalPrice + (product.price*product.quantity), 0);
}

export const cartReducer = createReducer(
    InitialCartState,
    on(addToCart, (state, { product }) =>
    (
        {
            ...state,
            products: [...state.products, product]
        }
    )),
    on(incrementProduct, (state, { productId }) => {
        const updatedProducts = state.products.map(
            product => product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        )
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calculateTotalPrice(updatedProducts)
        }
    }
    ),
    on(decrementProduct, (state, { productId }) => {
        const updatedProducts = state.products.map(
            product => product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
        )
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calculateTotalPrice(updatedProducts)
        }
    }
    ),
    on(removeProduct, (state, { productId }) => {
        const updatedProducts = state.products.filter(
            product => product.id !== productId 
        )
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calculateTotalPrice(updatedProducts)
        }
    }
    )


)