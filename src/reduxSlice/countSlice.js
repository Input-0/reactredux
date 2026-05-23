import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    count:0
}


let countSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count = state.count+1

        },
        decrement:(state)=>{
            state.count = state.count-1
        },
        reset:(state)=>{
            state.count = 0
        }
    }
})


export let {increment,decrement,reset} = countSlice.actions

export default countSlice.reducer







