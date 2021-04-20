import React from 'react';
import AppRouter from './routers/AppRouter'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', note: 'Apr', amount: 4500, createdAt: 3000}));

store.dispatch(addExpense({description: 'Gas Bill', note: 'Apr', amount: 2500, createdAt: 2000}));

store.dispatch(addExpense({description: 'Rent', note: 'Apr', amount: 10950, createdAt: 1000}));

// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter());
},3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

