import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    items: [],
    isLoading: false,
    error: null,
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        fetchInProgress(state) {
            state.isLoading = true
        },
        fetchSuccess(state, action){
            state.isLoading = false
            state.error = null
            state.items = action.payload
        },
        fetchError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    }
    
})

export const {fetchInProgress, fetchSuccess, fetchError} = taskSlice.actions
export default taskSlice.reducer