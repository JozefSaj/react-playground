import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index

function App() {
  return (
    <div>
      <FaCalendarTimes color="red"></FaCalendarTimes>
      <ListGroup items={['New York', 'Lost Angeles', 'San Francisco']} heading='Miami' onSelectItem={(item: string) => console.log(item)}></ListGroup>
    </div>
  );
}

export default App;
