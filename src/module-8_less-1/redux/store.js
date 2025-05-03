import { configureStore } from "@reduxjs/toolkit";
import todosReduser from './todoSlice'
import { authReducer } from "./authSlice";

export const store = configureStore({
    reducer: {
        todos: todosReduser, 
        auth: authReducer,
    }
})