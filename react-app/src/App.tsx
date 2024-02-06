import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleOnClickEvent = () => {
    console.log("test");
  };
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="danger" onClickEvent={handleOnClickEvent}>
        Test
      </Button>
    </div>
  );
}

export default App;
