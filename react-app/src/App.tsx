import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index
import Like from "./components/Like";
import produce from "immer";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState({
   discount: .1,
   items: [
    {id: 1, title: 'Product 1', quantity: 1},
    {id: 2, title: 'Product 2', quantity: 1},
   ]
  });

  const handleClick = () =>{
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)});
  };

  return (
    <div>
  
    </div>
  );
}

export default App;
