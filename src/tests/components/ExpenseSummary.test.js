import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expensesTotal from '../../selectors/expenses-total';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
test('test case for snapshot of this component',()=>{
    //const expensesCount=expenses.length;
    //const expensesTotal1=expensesTotal(expenses);
    const wrapper=shallow(<ExpenseSummary expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot()
})
test('test case for snapshot for single expense',()=>{
    //const expensesCount=expenses.length;
    //const expensesTotal1=expensesTotal(expenses);
    const wrapper=shallow(<ExpenseSummary expensesCount={3} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})