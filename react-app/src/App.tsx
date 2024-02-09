import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const[alertVisible, setAlertVisiblity] = useState(false)
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>My alert</Alert>}
      <Button color="danger" onClickEvent = {() => setAlertVisiblity(true)}>
        Test
      </Button>
    </div>
  );
}

export default App;
