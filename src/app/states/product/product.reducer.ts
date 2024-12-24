import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import { addToCart, decrementProduct, incrementProduct, removeProduct } from "./product.actions";

export interface CartState {
    products: IProduct[]
}

export const InitialCartState: CartState = {
    products: []
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
            products: updatedProducts
        }
    }
    ),
    on(decrementProduct, (state, { productId }) => {
        const updatedProducts = state.products.map(
            product => product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
        )
        return {
            ...state,
            products: updatedProducts
        }
    }
    ),
    on(removeProduct, (state, { productId }) => {
        const updatedProducts = state.products.filter(
            product => product.id !== productId 
        )
        return {
            ...state,
            products: updatedProducts
        }
    }
    )


)