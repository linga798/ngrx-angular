import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCartState = (appState:AppState) => appState.cart;

export const selectCartProducts = createSelector(
    selectCartState,
    (cartState) => cartState.products
)