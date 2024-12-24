import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCounterState = (appState:AppState) => appState.counter;

export const selectCount = createSelector(
    selectCounterState,
    (counterState) => counterState.count
)