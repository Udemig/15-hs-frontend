import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer'ları birleştir
const rootReducer = combineReducers({ noteReducer });

// persist için ayar nesnesi
const persistConfig = {
  key: "root",
  storage,
};

// persist reducer'ı oluştur
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store'u oluştur
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Bu aksiyonları görmezden gel
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// store'u export et
export default store;

// persist store'u export et
export const persistor = persistStore(store);
