import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxSlice/countSlice.js"
import userReducer from "./reduxSlice/userSlice.js"

let store = configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer
    }
})

export default store