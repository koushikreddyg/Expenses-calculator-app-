import React from 'react';
import {connect} from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectorExpenses from '../selectors/expenses';
import numeral from 'numeral';
export const ExpenseSummary =({expensesCount,expensesTotal})=>{
    let expenseWord=expensesCount<2?'expense':'expenses'
    return(
    <div>
        <h1>Viewing {expensesCount} {expenseWord} totalling  {numeral(expensesTotal/100).format('$0,0.00')}</h1>
        
    </div>
    );
}
const mapStateToProps=(state)=>({
expensesCount:selectorExpenses(state.expenses,state.filters).length,
expensesTotal:expensesTotal(selectorExpenses(state.expenses,state.filters))
})
export default connect(mapStateToProps)(ExpenseSummary)