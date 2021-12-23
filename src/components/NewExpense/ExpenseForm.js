import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = ({onAddExpenses}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }
  const handleSubmitExpense = (e) => {
    e.preventDefault();
    if(!title || !amount || !date){
      return
    }
    const expenseData = {
      id : Math.floor(Math.random()*1000000)+1,
      title,
      amount,
      date: new Date(date)
    }
    onAddExpenses(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmitExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0.01"
            step="0.01"
            />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;