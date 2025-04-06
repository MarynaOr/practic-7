import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        todo: todoReducer,
        filter: filterReducer,
    }
})