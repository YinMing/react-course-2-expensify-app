import ReactDOM from 'react-dom';
//to provide the store to all of the components
import { Provider } from 'react-redux';
//BrowserRouter->create new router, Route->for single page (e.g. path)
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.subscribe(()=>{
//     const state = store.getState();
//     const visibleExpense = getVisibleExpense(state.expenses, state.filters);
//     console.log(visibleExpense);
// });

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill', createAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
// setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('Water'));

// setTimeout( () => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


