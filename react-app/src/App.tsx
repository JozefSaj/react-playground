import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index
import Like from "./components/Like";

function App() {
  const [customer, setCustomer] = useState({
    name: "Jhon",
    address: {
      city: "San Francisco",
      zipCode: 94111
    }
  });

  const handleClick = () =>{
    setCustomer({...customer, address: {...customer.address, zipCode:94112}})
  };

  return (
    <div>
      <button> </button>
    </div>
  );
}

export default App;
