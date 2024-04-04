import { createSlice } from '@reduxjs/toolkit';
import { addToLocalStorage } from '../services/localStorageService';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      addToLocalStorage('mode', state.mode);
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
