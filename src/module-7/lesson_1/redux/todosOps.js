import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://67ef9d9b2a80b06b8894f93c.mockapi.io';
export const fetchdata= createAsyncThunk('tasks/fetchTasks', async(_, thunkAPI)=>{
    try{
        const response = await axios.get(`/TodoList`)
    return response.data
    } catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
    
})

export const deleteData = createAsyncThunk('tasks/deleteData', async(id,thunkAPI)=>{
   try{
    await axios.delete(`/TodoList/${id}`)
    return id
   } catch(e){
    return thunkAPI.rejectWithValue(e.message)

   }
})

// export const fetchdata = createAsyncThunk('tasks/fetchTasks', async() =>{
//     try{
//         const { data } = await axios.get('https://67ef9d9b2a80b06b8894f93c.mockapi.io/TodoList')
//         return data
//     } catch(error){
//         console.log(error);
        
//     }

// })

// export const fetchdata = createAsyncThunk('tasks/fetchTasks', async () => {
//     const response = await fetch('https://67ef9d9b2a80b06b8894f93c.mockapi.io/TodoList');
//     const data = await response.json();
//     return data;
//   });









