import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const initialState ={
    items: [],
    isLoading: false,
    error: null,
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchTasks.pending, (state, action) => {
            state.isLoading = true;
          })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items = action.payload
        })
        .addCase(fetchTasks.rejected, (state, action)=>{
            state.isLoading= false
            state.error = action.payload
        })
    
    
    }
    // reducers:{
    //     fetchInProgress(state) {
    //         state.isLoading = true
    //     },
    //     fetchSuccess(state, action){
    //         state.isLoading = false
    //         state.error = null
    //         state.items = action.payload
    //     },
    //     fetchError(state, action) {
    //         state.isLoading = false
    //         state.error = action.payload
    //     }
    // }
    
})

// export const {fetchInProgress, fetchSuccess, fetchError} = taskSlice.actions
export default taskSlice.reducer