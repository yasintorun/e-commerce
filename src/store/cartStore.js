import { HYDRATE } from "next-redux-wrapper";

const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCartAction: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(x => x.product.id === item.product.id);
            if (existingItem) {
                state.cartItems = state.cartItems.filter(x => x.product.id !== existingItem.product.id);
            }
            state.cartItems = [...state.cartItems, {...item, quantity: item.count * item.product.price}];
        },
        setCartItemsAction: (state, action) => {
            state.cartItems = action.payload.map(x => ({ ...x, quantity: x.count * x.product.price }))
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