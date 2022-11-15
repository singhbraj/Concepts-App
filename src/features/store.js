
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './cake/cakeSlice'
import icecreamReducer from './iceCream/iceCreamSlice'

export const store = configureStore({
    reducer:{
        cakeReducer,
        icecreamReducer
    }
})