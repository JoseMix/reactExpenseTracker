import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isVisible, setIsVisible] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsVisible(false);
  };
  const visibilityHandler = () => {
    setIsVisible((prevState) => {
      return !isVisible;
    });
  };
  const stopEditingHandler = () => {
    setIsVisible(false);
  };
  //2 ways of changing state

  return (
    <div className="new-expense">
      {isVisible && (
        <ExpenseForm
          onChangeVisibility={stopEditingHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
      {!isVisible && (
        <button onClick={visibilityHandler}>Add new Expense</button>
      )}
    </div>
  );
}
export default NewExpense;
