import React, { Component } from "react";
import Title from "./Components/Title/Title";
import GamePage from "./Containers/GamePage/GamePage";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="text-center" style = {{height: "100vh", width:"100%"}}>
        <Title />
        <br />
        <GamePage />
      </div>
    );
  }
}

export default App;
