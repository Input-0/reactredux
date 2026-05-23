import { createSlice } from "@reduxjs/toolkit";


let userSlice = createSlice({
    name:"user",
    initialState:{
        name:'',
        email:'',
        password:''
    },
    reducers:{
        register:(state,action)=>{
            state.name = action.payload.name,
            state.email = action.payload.email,
            state.password= action.payload.password

        }
        
    }
})

export let {register} = userSlice.actions

export default userSlice.reducer