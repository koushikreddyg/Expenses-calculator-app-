import React from 'react';
import expenses from '../fixtures/expenses'
import expensesTotal from '../../selectors/expenses-total';
test('test with expenes total of 0',()=>{
    const expenses=[];
    expect(expensesTotal(expenses)).toBe(0);
})
test('test with one expense',()=>{
   
    expect(expensesTotal([expenses[2]])).toBe(4500);
})
test('test with all expense',()=>{
    expect(expensesTotal(expenses)).toBe(114195);
})
