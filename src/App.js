import Expenses from "./components/Expenses/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
