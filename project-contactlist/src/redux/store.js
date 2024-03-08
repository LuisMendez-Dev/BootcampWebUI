import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const preloadedState = {
  contacts: {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState,
});

export default store;
