import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FaCalendarTimes } from "react-icons/fa";
import ListGroup from "./components/ListGroup"; //it will look for file index
import Like from "./components/Like";
import produce from "immer";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {

  const handleClick = () =>{

  };

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non enim maxime repudiandae nemo neque nulla voluptate tenetur quia, doloribus porro adipisci similique tempore voluptatum. Aspernatur qui animi nemo, consectetur obcaecati impedit quas rem ullam. Ex laboriosam, qui harum, ipsa laudantium, maxime reprehenderit est quaerat modi officia corrupti! Ratione aliquam incidunt quidem excepturi aut atque harum magnam cum numquam eius natus nemo iure obcaecati id exercitationem quisquam voluptate, delectus necessitatibus, optio a rerum ullam iusto. Dicta magnam tenetur placeat non molestiae fugit ad, quisquam itaque similique libero facere recusandae tempore beatae maxime ducimus commodi nesciunt, voluptates sint aut blanditiis dolorum.
      </ExpandableText>
    </div>
  );
}

export default App;
