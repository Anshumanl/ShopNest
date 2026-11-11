
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItem') || '[]')
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const existingProduct = state.cartItems.find(
                (item) => item._id === product._id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartItems.push({
                    ...product,
                    quantity: 1
                });
            }

            localStorage.setItem(
                'cartItem',
                JSON.stringify(state.cartItems)
            );
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload
            );

            localStorage.setItem( 'cartItem',JSON.stringify(state.cartItems));
        },

        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item._id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

            localStorage.setItem(
                'cartItem',
                JSON.stringify(state.cartItems)
            );
        },

        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item._id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem(
                'cartItem',
                JSON.stringify(state.cartItems)
            );
        },

        clearCart: (state) => {
            state.cartItems = [];

            localStorage.setItem(
                'cartItem',
                JSON.stringify(state.cartItems)
            );
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
