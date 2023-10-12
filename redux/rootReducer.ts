import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiService } from "./api/api";

export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    auth: authReducer,
   
});
