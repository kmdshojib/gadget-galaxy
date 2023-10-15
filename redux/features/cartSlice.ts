import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ICart {
    items: [{}] | null;
    totalPrice:number;
}
const initialState: ICart = {
    items: [
        {
            name: null,
            price: null,
            imageUrl: null,
            quantity: 0,
        }
    ] || null,
    totalPrice: 0,
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
        },
        setCartTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    }
})
export const { setCartItems, updateCartItems, setCartTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;