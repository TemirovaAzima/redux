import {createSlice} from "@reduxjs/toolkit"
export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    }
    ,
    reducers:{
        increment:(state) =>{
            state.value+=1
        },
        decrement:(state)=>{
            (state.value>0) ?state.value-=1 : state.value
        },
    },
})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer