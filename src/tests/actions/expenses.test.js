import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('should set up remove expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit Expense', () => {
    const action = editExpense( '123abc',{ note: 'new notes'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new notes'
        }
    });
});

// test('should setup add expense action object with provided values', () => {
//     const expenseData = {
//         description: 'Rent', 
//         note: 'This was last months rent', 
//         amount: 109500, 
//         createdAt: 1000
//     };
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     });
// });

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0
//         }
//     });
// });