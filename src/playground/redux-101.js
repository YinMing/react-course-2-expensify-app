import { createStore } from "redux";


// Action generators - functions return action objects
const add = ({a, b}, c)=>{
    return a + b + c;
};


console.log(add({ a: 1, b: 12}, 100));


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
}); 

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

//setCount
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

//resetCount
const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions, output only depends on input
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }

}


//set default state value, run when init / dispatch
const store = createStore(countReducer);

//run when the store is change the stage
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions than an object that gets sent to the store

//walk, stop_walking, sit, work
//increment, decrement, reset

//I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// }); 

store.dispatch(incrementCount({
    incrementBy: 5
}));

// unsubscribe();

store.dispatch(incrementCount()); 

//reset - set the count equal to 0
// store.dispatch({
//     type: 'RESET'
// }); 
store.dispatch(resetCount()); 


store.dispatch(decrementCount()); 

//decrementBy 10
store.dispatch(decrementCount({
    decrementBy: 10
})); 

// store.dispatch({
//     type: 'SET',
//     count: 101
// }); 


store.dispatch(setCount({
    count: -101
})); 
