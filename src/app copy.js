import React from 'react';
import AppRouter, { history } from './routers/AppRouter'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
};
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('log in');
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        renderApp();
        history.push('/');
    }
});