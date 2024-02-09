import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")}></Like>
    </div>
  );
}

export default App;
