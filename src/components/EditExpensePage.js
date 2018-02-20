import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { selectEditExpense, setRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit1 = (expense) => {
    this.props.selectEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.setRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  //buttonclick:
  render() {
    return (
      <div>
      
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit1}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  selectEditExpense: (id, expense) => dispatch(selectEditExpense(id, expense)),
  setRemoveExpense: (data) => dispatch(setRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
