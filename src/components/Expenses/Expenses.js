import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({items}) => {
  const [yearFilter, setYearFilter] = useState('2020');
  const handleYearFilterChange = (year) => {
    setYearFilter(year);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onYearChange={handleYearFilterChange} />
      {items.map(item => (<ExpenseItem key={item.id} {...item} />))}
    </Card>

  )
}

export default Expenses;