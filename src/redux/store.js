import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import phonebookReducer from './phonebook/phonebook-reducer';

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
      'your/action/type',
    ],
    ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    ignoredPaths: ['items.dates'],
  },
});

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
