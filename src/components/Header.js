import { NavLink } from "react-router-dom";
import React from 'react';

//link to home page
//link to create expense page
//link to edit page
//link to help page
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;
