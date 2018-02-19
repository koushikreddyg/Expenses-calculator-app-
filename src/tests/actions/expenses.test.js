import { addExpense, editExpense, removeExpense,startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
const createMockStore=configureMockStore([thunk]);
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = expenses[2]
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});
test('should add expense to the database and store',(done)=>{
  const store=createMockStore({});
  const expenseData={
    description:'mouse',
    amount:3000,
    note:'this mouse is good',
    createdAt:40000,
  }
  
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions=store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id:expect.any(String),
        ...expenseData
      }
      
    })
    database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseData);
    })
    done()
  })
}
)
test('should test add expense with default values',(done)=>{
  const store=createMockStore({});
  store.dispatch(startAddExpense({})).then(()=>{
    const actions=store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        description:'',
        id:expect.any(String),
        amount:0,
        note:'',
        createdAt:0,
      }
    
    });
    database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
      expect(snapshot.val()).toEqual({
        description:'',
        amount:0,
        note:'',
        createdAt:0,
      })
      done()
  })
  })
  
})
// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
