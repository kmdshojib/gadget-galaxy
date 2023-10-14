import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICart {
    items: any;
}
const initialState: ICart = {
    items: [
        {
            name: null,
            price: null,
            imageUrl: null,
            quantity: null,
        }
    ]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<any[]>) => {
            state.items = action.payload
        },
        updateCartItems: (state, action) => {
            state.items = action.payload;
        }
    }
})
export const { setCartItems, updateCartItems } = cartSlice.actions;
export default cartSlice.reducer;