import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
