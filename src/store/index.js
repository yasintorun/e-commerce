import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cartStore";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => configureStore({
    reducer: {
        cart: cartStore,
    }
})

export const wrapper = createWrapper(makeStore);