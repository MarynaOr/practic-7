import { configureStore } from "@reduxjs/toolkit";
import taskReducers from './tasksSlice'
export const store =  configureStore({
    reducer: {
        task: taskReducers,
    }
})