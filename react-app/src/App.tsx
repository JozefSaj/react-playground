import ProductList from "./components/ProductList";
import React, { useEffect, useState } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

function App() {
  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  });
  return <div className=""></div>;
}

export default App;
