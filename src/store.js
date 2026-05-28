import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slice/CounterSlice"

const store = configureStore({
    reducer:{
        counter:CounterReducer,
        cart:CartReducer
    }
})


export default store