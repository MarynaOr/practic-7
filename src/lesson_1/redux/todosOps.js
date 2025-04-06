import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://67ef9d9b2a80b06b8894f93c.mockapi.io/TodoList'

export const fetchTasks= createAsyncThunk('tasks/fetchTasks', async(_, thunkAPI)=>{
    try{
        const response = await axios.get('/tasks')
    return response.data
    } catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
    
})














