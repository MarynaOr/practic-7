import { configureStore } from "@reduxjs/toolkit";
import todosReduser from './todoSlice'

export const store = configureStore({
    reducer: {
        todos: todosReduser, 
    }
})