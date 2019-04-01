import React from "react";
import Door from "../Door/Door";
import { Container, Row, Col } from "react-bootstrap";
import "./GamePage.css";

class GamePage extends React.Component {
  shuffleArray = (arr = ["Car", "Goat", "Goat"]) => {
    var ctr = arr.length,
      temp,
      index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    return arr;
    // console.log(arr)
  };
  state = {
    doors: ["A", "B", "C"],
    prizes: this.shuffleArray(),
    userSelectedDoor: null,
    revealedDoor: null,
    userWon: null,
    prizeDoor: null
  };

  renderDoors = () => {
    return this.state.doors.map(door => (
      <Col xs={4} key={door}>
        <Door
          id={door}
          selectedDoor={
            !this.state.userSelectedDoor && (id => this.userSelection(id))
          }
          colorDoor={
            this.state.userSelectedDoor === door ? "doorSelected" : "door"
          }
        />
      </Col>
    ));
  };

  userSelection = id => {
    this.setState({ userSelectedDoor: id });
  };

  revealDoor = () => {
    var userSelectedDoor = this.state.userSelectedDoor;
    var prizes = this.state.prizes;
    var id =
      userSelectedDoor === "A"
        ? prizes[1] === "Goat" && prizes[2] === "Goat"
          ? ["B", "C"][Math.floor(Math.random() * ["B", "C"].length)]
          : prizes[1] === "Goat"
          ? "B"
          : prizes[2] === "Goat"
          ? "C"
          : null
        : userSelectedDoor === "B"
        ? prizes[0] === "Goat" && prizes[2] === "Goat"
          ? ["A", "C"][Math.floor(Math.random() * ["A", "C"].length)]
          : prizes[0] === "Goat"
          ? "A"
          : prizes[2] === "Goat"
          ? "C"
          : null
        : userSelectedDoor === "C"
        ? prizes[0] === "Goat" && prizes[1] === "Goat"
          ? ["A", "B"][Math.floor(Math.random() * ["A", "B"].length)]
          : prizes[0] === "Goat"
          ? "A"
          : prizes[0] === "Goat"
          ? "B"
          : null
        : null;
    this.setState({ revealedDoor: id });
  };

  changeChoice = () => {
    this.setState(prevState => ({
      userSelectedDoor:
        prevState.userSelectedDoor === "A" && this.state.revealedDoor === "B"
          ? "C"
          : prevState.userSelectedDoor === "A" &&
            this.state.revealedDoor === "C"
          ? "B"
          : prevState.userSelectedDoor === "B" &&
            this.state.revealedDoor === "A"
          ? "C"
          : prevState.userSelectedDoor === "B" &&
            this.state.revealedDoor === "C"
          ? "A"
          : prevState.userSelectedDoor === "C" &&
            this.state.revealedDoor === "A"
          ? "B"
          : prevState.userSelectedDoor === "C" &&
            this.state.revealedDoor === "B"
          ? "A"
          : null
    }));
    this.findResult(true);
  };

  keepChoice = () => {
    this.setState(prevState => ({
      userSelectedDoor: prevState.userSelectedDoor
    }));
    this.findResult(false);
  };
  //  ********************** Trust me, this function below is fucked up **********************
  // ******************** And I dont know why ***************************
  // ******************** It is for the future ME to find it out ********************
  findResult = fromChangeChoice => {
    fromChangeChoice === false
      ? this.state.userSelectedDoor === "A" && this.state.prizes[0] === "Car"
        ? this.setState({ userWon: true })
        : this.state.userSelectedDoor === "B" && this.state.prizes[1] === "Car"
        ? this.setState({ userWon: true })
        : this.state.userSelectedDoor === "C" && this.state.prizes[2] === "Car"
        ? this.setState({ userWon: true })
        : this.setState({ userWon: false })
      : // else if its from changeChoice
      this.state.userSelectedDoor === "A" && this.state.prizes[0] === "Car"
      ? this.setState({ userWon: false })
      : this.state.userSelectedDoor === "B" && this.state.prizes[1] === "Car"
      ? this.setState({ userWon: false })
      : this.state.userSelectedDoor === "C" && this.state.prizes[2] === "Car"
      ? this.setState({ userWon: false })
      : this.setState({ userWon: true });
  };

  revealResult = () => {
    var result =
      this.state.userWon === true ? (
        <h2 style={{ color: "white" }}>You won</h2>
      ) : this.state.userWon === false ? (
        <h2 style={{ color: "white" }}>You Lost</h2>
      ) : null;
    return result;
  };
  refreshPage = () => {
    this.setState({
      doors: ["A", "B", "C"],
      prizes: this.shuffleArray(),
      userSelectedDoor: null,
      revealedDoor: null,
      userWon: null
    });
  };

  render() {
    return (
      <div align="center" style={{ height: "100vh", width: "100%" }}>
        <br />
        <br />
        <Container align="center">
          <Row>{this.renderDoors()}</Row>
          <br />
          {this.state.userSelectedDoor != null && !this.state.revealedDoor && (
            <button className="button" onClick={this.revealDoor}>
              Reveal Door
            </button>
          )}
          <br />

          {this.state.revealedDoor && this.state.userSelectedDoor != null && this.state.userWon == null && (
            <div style={{ color: "white" }}>
              <h1> Door {this.state.revealedDoor} has a goat behind it</h1>
              <h4>Do you want to change your choice to the other door</h4>
              <Row>
                <Col xs={6}>
                  <button
                    className="button"
                    style={{ fontSize: "30px" }}
                    onClick={this.changeChoice}
                  >
                    <span>Yes</span>
                  </button>
                </Col>
                <Col xs={6}>
                  <button
                    className="button"
                    style={{ fontSize: "30px" }}
                    onClick={this.keepChoice}
                  >
                    <span>No Way _|_</span>
                  </button>
                </Col>
              </Row>
            </div>
          )}
          {this.state.userWon != null && this.revealResult()}
          {this.state.userWon != null && (
            <button className="button" onClick={this.refreshPage}>
              <span>Play Again</span>
            </button>
          )}
        </Container>
      </div>
    );
  }
}

export default GamePage;
