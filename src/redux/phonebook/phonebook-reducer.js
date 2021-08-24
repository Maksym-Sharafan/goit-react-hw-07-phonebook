import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  changeFilter,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => {
    return [action.payload, ...state];
  },
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
