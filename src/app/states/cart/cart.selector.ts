import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";

export const selectCartState = (appState:AppState) => appState.cart;

export const selectCartProducts = createSelector(
    selectCartState,
    (cartState: CartState) => cartState.products
)

export const selectCartTotalPrice = createSelector(
    selectCartState,
    (cartState: CartState) => cartState.totalPrice
)