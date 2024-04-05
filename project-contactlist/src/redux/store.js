import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import modeReducer from './modeSlice';
import { getFromLocalStorage } from '../services/localStorageService';

const preloadedState = {
  contacts: {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  mode: {
    mode: getFromLocalStorage('mode') || 'light',
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
