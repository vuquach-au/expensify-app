//  import * as firebase from 'firebase';
import uuid from 'uuid';
import database  from '../firebase/firebase';
// var firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}


/*export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0

    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});*/

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses));
      });
    };
  };
  