import { CounterState } from "./counter/counter.reducer";
import { CartState } from "./product/product.reducer";

export interface AppState {
    counter: CounterState,
    cart: CartState
}