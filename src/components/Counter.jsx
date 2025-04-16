import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "../app/features/counter/counterSlice.js"

const Counter = () => {
    // read data from store
    const count = useSelector((state)=>state.counter.value);
    // trigger reducer to update state by actions dispatch
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter
