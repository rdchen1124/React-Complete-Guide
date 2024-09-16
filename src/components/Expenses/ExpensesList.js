import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({items}) => {
  if(items.length === 0){
    return <h2 className="expenses-list__fallback">Expenses not found!!</h2>
  }
  return (
    <ul className="expenses-list">
      {items.map(item => (
        <ExpenseItem 
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  )
}

export default ExpensesList;