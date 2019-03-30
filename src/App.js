import React, { Component } from "react";
import GamePage from "./Components/GamePage/GamePage";

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Monty Hall Game</h1>
        <br />
        <GamePage />
      </div>
    );
  }
}

export default App;
