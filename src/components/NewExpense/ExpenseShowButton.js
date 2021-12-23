import React from "react";

const ExpenseShowButton = ({onShowForm}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onShowForm();
  }
  return (
    <button onClick={handleClick}>Add New Expense</button>
  )
}

export default ExpenseShowButton;