
// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. reducers - increment -> count => count + 1
//            decrement -> count => count - 1
//             reset -> count => 0
// 4. store
// 5. Providing store in react/ index.js
// 6. use store
// for store -> install redux
// for use react in redux -> install react-redux

// react run path   index.js -> App.js -> Counter.js .......

import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

const initialCounter = {count : 0};

const counterReducer = (state = initialCounter, action)=> {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count : 0,
            };
        default:
                return state;

    }
};

export default counterReducer;
