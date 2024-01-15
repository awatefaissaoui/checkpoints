import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos :[]

}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state,data) => {
      state.todos.push(data) 
    },

  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions

export default todoSlice.reducer