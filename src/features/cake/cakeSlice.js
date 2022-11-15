import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cake:0
}


export const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        increment:(state)=>{
            state.cake++;
        },
        decrement:(state)=>{
            state.cake--;
        },
        reset:(state)=>{
            state.cake=0
        }
    }
})

export const {increment,decrement,reset} = cakeSlice.actions
export default cakeSlice.reducer;