import React from "react";
import ReactDOM from "react-dom";
import RockPaperSciccors from "./components/App";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <RockPaperSciccors />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
