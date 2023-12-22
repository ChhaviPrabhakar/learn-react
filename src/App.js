import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2023, 2, 22),
      title: "Car Insurance",
      amount: 355.5,
      location: "Park Street",
    },
    {
      date: new Date(2023, 2, 22),
      title: "Books",
      amount: 56.2,
      location: "Book Market",
    },
    {
      date: new Date(2023, 2, 22),
      title: "Desk",
      amount: 425.5,
      location: "Karol Bagh",
    },
    {
      date: new Date(2023, 2, 22),
      title: "I Pod",
      amount: 388.5,
      location: "Boring Road",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].location}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
        location={expenses[3].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
