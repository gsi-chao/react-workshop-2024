import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Container from "./components/container/Container";
import CustomComponent from "./components/custom-component/CustomComponent";
import ShoppingList from "./components/shopping-list/ShoppingList";

function App() {
  const [state, setState] = useState(0);

  const onButtonClick = () => {
    setState(state + 1);
  };

  return (
    <>
      <Button text="Click Now!!" onClick={onButtonClick} />

      <Container customComponent={<CustomComponent />}>
        <ShoppingList />
      </Container>
    </>
  );
}

export default App;
