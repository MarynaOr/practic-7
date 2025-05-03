import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthThunk } from "./authOperations";

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
}
})

export const authReducer = slice.reducer

