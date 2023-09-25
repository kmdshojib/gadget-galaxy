import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { apiService } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from './Storage';
import { rootReducer } from "./rootReducer";


const persistConfig = {
  key: "root",
  storage,
}
const ignoredActions: any = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions,
    },
  }).concat(logger, apiService.middleware)
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)

export default store;
