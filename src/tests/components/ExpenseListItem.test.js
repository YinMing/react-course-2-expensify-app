//create ExpenseListItem test file
//grab imports
//render ExpenseListItem with fixture data
//create snapshot

import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});