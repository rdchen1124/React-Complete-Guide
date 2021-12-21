import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({title, amount, date}) => {
  const [name, setName] = useState(title);
  const handleClick = () => {
    setName('Updated');
    console.log(name);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{name}</h2>
        <div className='expense-item__price'>$ {amount}</div>
        <button onClick={handleClick}>Click</button>
      </div>
    </Card>
  )
}
export default ExpenseItem;