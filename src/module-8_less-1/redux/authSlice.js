import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthThunk, loginThunk, logoutThunk } from "./authOperations";

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',

    },
    token: '',
    isLogedIn: false,
}

const slice = createSlice({
name: 'auth',
initialState,
reducers:{},
extraReducers: builder => {
    builder
    .addCase(fetchAuthThunk.fulfilled, (state, action)=>{
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLogedIn = true
    })
    .addCase(loginThunk.fulfilled, (state, action)=>{
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLogedIn = true
    })
    .addCase(logoutThunk.fulfilled, ()=>initialState)
    .addCase(logoutThunk.rejected, (state, action) => {
        // опційно: можна показати повідомлення про помилку
        console.error('Logout failed:', action.payload);
      });
}
})

export const authReducer = slice.reducer

