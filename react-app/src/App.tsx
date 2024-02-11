import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index
import Like from "./components/Like";

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () =>{
   //Add
   setTags([...tags, 'exciting']);

   //remove
   setTags(tags.filter(tag => tag != 'happy'));
  //update
  setTags(tags.map(tag => tag == "happy" ? "happiness" : tag));
  };

  return (
    <div>
      <button> </button>
    </div>
  );
}

export default App;
