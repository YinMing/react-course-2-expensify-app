import {createStore, combineReducers} from 'redux';
import uuid from "uuid";
//timestamps (milliseconds)
//January 1st 1970 (unix epoch) - 0 timestamp
//33400, 10, -203

//track changes
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpense);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createAt: -1000 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());  //amount
// store.dispatch(sortByDate());    //date

// store.dispatch(setStartDate(0)); //startDate 125
// store.dispatch(setStartDate());    //startDate undefined
// store.dispatch(setEndDate(999));  //endDate 1250

const demoState = {
    expenses: [{
        id: 'poidsdwsw',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

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

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia'
// });
