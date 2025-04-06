// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./todosOps";
// axios.defaults.baseURL ='https://67ef9d9b2a80b06b8894f93c.mockapi.io/TodoList'

// export const fetchTasks = createAsyncThunk('tasks', async()=>{
//     const response = await axios.get()
// })

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state,action)=>{
        state.isLoading=false
        state.isError = action.payload
      })
      ;
  },
});
