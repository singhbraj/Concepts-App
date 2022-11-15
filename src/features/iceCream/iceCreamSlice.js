import {createAction, createSlice } from "@reduxjs/toolkit";

const Derement = createAction('cake/decrement')

const initialState = {
    icecream:0
}


export const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        increment:(state)=>{
            state.icecream++;
        },
        decrement:(state)=>{
            state.icecream--;
        },
        reset:(state)=>{
            state.icecream=0
        }
    },
    // extraReducers:{
    //     ['cake/decrement']:(state)=>{
    //         state.icecream--;
    //     }
    // }
    extraReducers:(builder)=>{
builder.addCase(Derement,(state)=>{
    state.icecream--;
})
    }
})

export const {increment,decrement,reset} = icecreamSlice.actions
export default icecreamSlice.reducer;