import { configureStore } from "@reduxjs/toolkit";
import { dollarReducer } from "./dollar";

const store = configureStore({
    reducer: {
        dollar: dollarReducer
    },
});

type State = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

export type { State, Dispatch }
export { store }