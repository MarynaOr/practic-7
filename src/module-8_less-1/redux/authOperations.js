import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.goit.global/'
export const api = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

export const fetchAuthThunk = createAsyncThunk('auth/fetchAuthThunk', async (body, thunkAPI) => {
    try {
        const {data} = await api.post('users/signup', body)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)
export const loginThunk = createAsyncThunk('auth/loginThunk', async (body, thunkAPI) => {
    try {
        const {data} = await api.post('users/login', body)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)


// gffs123124133323@fd.com







