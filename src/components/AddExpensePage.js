import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import React from 'react';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
                    //props.dispatch(addExpense(expense));
                    this.props.onSubmit(expense);
                    this.props.history.push('/'); //browser routing
                };
    render() {
         return (<div>
                    <h1>Add Expense</h1>
                    <ExpenseForm onSubmit={this.onSubmit} />
                 </div>);
    }
}


const mapDispatchToProps = (dispatch) =>(
    {
        onSubmit: (expense) => dispatch(addExpense(expense))
    }
);

export default connect(undefined, mapDispatchToProps)(AddExpensePage);