import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.goit.global/'
export const api = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

export const setAuthHeader = token =>{
    api.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const clearAuthHeader = () =>{
    api.defaults.headers.common.Authorization = ``
}

export const fetchAuthThunk = createAsyncThunk('auth/fetchAuthThunk', async (body, thunkAPI) => {
    try {
        const {data} = await api.post('users/signup', body)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)
export const loginThunk = createAsyncThunk('auth/loginThunk', async (body, thunkAPI) => {
    try {
        const {data} = await api.post('users/login', body)
        setAuthHeader(data.token)

        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

export const logoutThunk = createAsyncThunk('auth/logoutThunk', async (_, thunkAPI)=>{
    try {
        const {data} = await api.post('users/logout')
        clearAuthHeader()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)

    }
})

// gffs123124133323@fd.com







