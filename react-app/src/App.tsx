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
  const [game, setGame] = useState({
    id: 1,
    player:{
      name: "John",
    }
  });

  const handleClick = () =>{
    setGame({...game, player: {...game.player, name: 'Bob'}});
  };

  return (
    <div>
  
    </div>
  );
}

export default App;
