import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    const startAddExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
})

test('should render AddExpensePage correctly', () => {
    
    expect(wrapper).toMatchSnapshot();
});

test('should handle on Submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})