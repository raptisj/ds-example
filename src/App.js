import React from "react";
import "./App.css";
import Button from "./components/Button";
import Grid from "./components/Grid";
import { color, radius } from "./theme";

function App() {
  const click = () => {
    console.log("heyyyy!!!!");
  };

  return (
    <div className="App">
      <h1>Design System</h1>
      <hr />
      <h2>Buttons</h2>
      <Grid width="800px">
        <Button onClick={click} color={color.white} radius={radius.medium}>
          Button
        </Button>
        <Button onClick={click} color={color.white} radius={radius.hard}>
          Button
        </Button>
      </Grid>
    </div>
  );
}

export default App;
