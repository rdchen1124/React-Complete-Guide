import React, { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({items}) => {
  const [yearFilter, setYearFilter] = useState('2020');
  const handleYearFilterChange = (year) => {
    setYearFilter(year);
  }
  const filteredItem = items.filter(item => item.date.getFullYear().toString() === yearFilter);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onYearChange={handleYearFilterChange} />
      <ExpensesChart expenses={filteredItem} />
      <ExpensesList items={filteredItem} />
    </Card>

  )
}

export default Expenses;