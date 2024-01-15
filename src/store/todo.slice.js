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
    update: (state, action) => {
      console.log(action)
      state.todos[action.payload.id] = action.payload.formData
    },
  },
});

export const { addTodo, markAsDone,update } = todoSlice.actions;

export default todoSlice.reducer;
