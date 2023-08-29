import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { apiService } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "./features/authSlice";

const reducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  auth: authReducer
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, apiService.middleware)
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
