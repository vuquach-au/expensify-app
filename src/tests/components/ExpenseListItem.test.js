import React from 'react';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem with expenses', () => {
    
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})