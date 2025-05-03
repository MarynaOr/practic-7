import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

export const fetchAuthThunk = createAsyncThunk('auth/fetchAuthThunk', async (body, thunkAPI) => {
    try {
        const {data} = await axios.post('users/signup', body)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)










