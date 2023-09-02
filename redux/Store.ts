import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { apiService } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "./features/authSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const reducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  auth: authReducer
});
const persistConfig = {
  key: "root",
  storage,
  debugger:false
}
const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions,
    },
  }).concat(logger, apiService.middleware)
});
setupListeners(store.dispatch);

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
