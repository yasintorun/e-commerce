import { HYDRATE } from "next-redux-wrapper";

const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCartAction: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },
        setCartItemsAction: (state, action) => {
            state.cartItems = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.cart,
            };
        },
    },
});

export const { addToCartAction, setCartItemsAction } = slice.actions;
export default slice.reducer;