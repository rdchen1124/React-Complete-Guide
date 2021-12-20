import './ExpenseItem.css'
const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>Dec. 20th 2021</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$299.7</div>
      </div>
    </div>
  )
}
export default ExpenseItem;