import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});
export const { addToCart, removeFromCart, updateQuantity, selectCartItems } = cartSlice.actions;
export default cartSlice.reducer;
