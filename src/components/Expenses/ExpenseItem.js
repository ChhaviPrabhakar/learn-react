import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  const changePrice = () => {
    setPrice(100);
    console.log(price);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} location={props.location} amount={price} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changePrice}>Change Price</button>
    </Card>
  );
};

export default ExpenseItem;
