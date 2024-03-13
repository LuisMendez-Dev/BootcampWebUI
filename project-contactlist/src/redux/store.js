import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import modeReducer from './modeSlice';

const preloadedState = {
  contacts: {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  mode: {
    mode: JSON.parse(localStorage.getItem('mode')) || 'light',
  },
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    mode: modeReducer,
  },
  preloadedState,
});

export default store;
