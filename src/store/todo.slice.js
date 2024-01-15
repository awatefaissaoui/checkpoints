import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    markAsDone: (state, action) => {
      console.log();
      state.todos[action.payload].done = true;
    },
    filter: (state, action) => {
      state.todos = state.todos;
    },
  },
});

export const { addTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
