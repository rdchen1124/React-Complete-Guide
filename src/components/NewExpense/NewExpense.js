import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import ExpenseShowButton from "./ExpenseShowButton";

const NewExpense = ({onAddExpenses}) => {
  const [hideExpenseForm, setHideExpenseForm] = useState(true);
  const handleFormShow = () => {
    setHideExpenseForm(false);
  }
  const handleFormHide = () => {
    setHideExpenseForm(true);
  }
  return (
    <div className="new-expense">
      {!hideExpenseForm && <ExpenseForm onAddExpenses={onAddExpenses} onHideForm={handleFormHide} />}
      {hideExpenseForm && <ExpenseShowButton onShowForm={handleFormShow}/>}
    </div>
  )
}

export default NewExpense;