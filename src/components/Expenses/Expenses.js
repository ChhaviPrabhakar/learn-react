import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
        location={props.items[0].location}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
        location={props.items[1].location}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
        location={props.items[2].location}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
        location={props.items[3].location}
      />
    </Card>
  );
};

export default Expenses;
