import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICategories {
    categories: string[] | null;
}
const initialState: ICategories = {
    categories: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategrories: (state, action: PayloadAction<ICategories>) => {
            state.categories = action.payload.categories;
        }
    }
})

export const { setCategrories } = categoriesSlice.actions;
export default categoriesSlice.reducer;