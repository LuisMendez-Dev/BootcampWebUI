import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
