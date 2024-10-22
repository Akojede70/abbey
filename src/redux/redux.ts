import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userReducer from './slices/userSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Creating a persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the store
const store = configureStore({
  reducer: {
    user: persistedReducer, // Using the persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Creating a persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
