import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpenses}) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenses={onAddExpenses} />
    </div>
  )
}

export default NewExpense;