import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactSlice from './contactSlice'
import filterReducer from './filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'contacts',    
    storage,
    whitelist: ['items'],
  };

  const contactsReducer = persistReducer(
    persistConfig,
    contactSlice   
);

export const store = configureStore({
    reducer: { 
        contacts: contactsReducer,
        filter: filterReducer
    },
    
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);