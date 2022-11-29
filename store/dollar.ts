import { createSlice } from "@reduxjs/toolkit";
import { state } from "./state";

export const dollarSlice = createSlice({
    name: "user",
    initialState: state.dollar,
    reducers: {
        setData: (prevState, payload) => {
            prevState.items = payload as never;
        },
    },
});

const dollarActions = dollarSlice.actions;
const dollarReducer = dollarSlice.reducer;

export { dollarActions, dollarReducer }