import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesTotal from '../selectors/expenses-total';
import ExpenseSummary from './ExpenseSummary';
//import numeral from 'numeral';
//import {connect} from 'react-redux';
//import selectExpenses from '../selectors/expenses';
 const ExpenseDashboardPage = (props) => (
  <div>
  <ExpenseSummary/>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
