
// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. reducers - increment -> count => count + 1
//            decrement -> count => count - 1
//             reset -> count => 0
// 4. store
//===================================================

//import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    // const [count, setCount] = useState(0);

    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        // setCount((count) => count + 1);
        dispatch(incrementCounter());
    };
    const handleDecrement = () => {
        dispatch(decrementCounter());
    };
    const handleReset = () => {
        dispatch(resetCounter());
    };


    return (
        <div>
            <h1>Redux Counter App</h1>
            <h3>Count: {count} </h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;