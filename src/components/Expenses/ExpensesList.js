import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let text;

  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Sorry, no expenses are found!</h2>
    );
  } else if (props.items.length === 1) {
    text = <p className="expenses-list__fallback">Whoa! single expense here, you can add more.</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
      {text}
    </ul>
  );
};

export default ExpensesList;
