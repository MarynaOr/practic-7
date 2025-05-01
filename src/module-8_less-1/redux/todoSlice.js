import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, todo: "Buy milk", completed: false },
    { id: 2, todo: "Finish project", completed: true },],
  isLoading:false,
  isError: null,
};

 const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action)=>{
        state.todos.push(action.payload)
    }
  }
});

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer   