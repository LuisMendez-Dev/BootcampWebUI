import { createSlice } from "@reduxjs/toolkit";
import generateUniqueId from "generate-unique-id";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push({
        ...action.payload,
        id: generateUniqueId(),
        status: false,
      });
    },

    deleteTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleStatus: (state, action) => {
      const todoToChange = state.allTodos.find(
        (todo) => todo.id === action.payload
      );

      todoToChange.status = !todoToChange.status;
    },

    resetToDefault: (state) => {
      state.allTodos = [];
    },
  },
});

export const { addTodo, deleteTodo, toggleStatus, resetToDefault } =
  todoSlice.actions;

export default todoSlice.reducer;
