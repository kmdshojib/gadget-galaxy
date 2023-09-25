import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiService } from "./api/api";
import categoriesReducer from './features/categorySlice';

export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    auth: authReducer,
    categories: categoriesReducer
});
