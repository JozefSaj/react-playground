import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index
import Like from "./components/Like";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  return (
    <div>
      {drink.price}
      <button onClick={() => setDrink({...drink, price:6})}> </button>
    </div>
  );
}

export default App;
