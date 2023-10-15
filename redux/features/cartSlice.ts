import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICart {
    items: null | [] ;
}
const initialState: ICart = {
    items: null || [ ]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<null>) => {
            state.items = action.payload
        },
        updateCartItems: (state, action) => {
            state.items = action.payload;
        }
    }
})
export const { setCartItems, updateCartItems } = cartSlice.actions;
export default cartSlice.reducer;