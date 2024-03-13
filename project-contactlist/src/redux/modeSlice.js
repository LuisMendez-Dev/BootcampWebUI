import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', JSON.stringify(state.mode));
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
