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
    //  Set to false before deployment ------------->>>>>>>>>>>>>>>>>>>>>>>
    isPlayClicked: false,
    doors: ["A", "B", "C"],
    prizes: this.shuffleArray(),
    userSelectedDoor: null,
    revealedDoor: null,
    userWon: null,
    userSelectedFinal: null,
    prizeDoor: null
  };

  renderDoors = () => {
    return this.state.doors.map(door => (
      <Col xs={4}>
        <Door
          id={door}
          selectedDoor={
            !this.state.userSelectedDoor && (id => this.userSelection(id))
          }
          colorDoor={
            (this.state.userSelectedDoor || this.state.userSelectedFinal) ===
            door
              ? "doorSelected"
              : "door"
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
      userSelectedFinal:
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
    this.declareResult();
  };

  declareResult = () => {
    this.state.userSelectedFinal === "A" && this.state.prizes[0] === "Car"
      ? this.setState({ userWon: true })
      : this.state.userSelectedFinal === "B" && this.state.prizes[1] === "Car"
      ? this.setState({ userWon: true })
      : this.state.userSelectedFinal === "C" && this.state.prizes[2] === "Car"
      ? this.setState({ userWon: true })
      : this.setState({ userWon: false });

    this.revealResult();
  };

  revealResult = () => {
    return this.state.userWon === true ? (
      <h2>You won</h2>
    ) : this.state.userWon === false ? (
      <h2>You Lost</h2>
    ) : null;
  };
  refreshPage = () => {
    this.setState({
      //  Set to false before deployment ------------->>>>>>>>>>>>>>>>>>>>>>>
      isPlayClicked: false,
      doors: ["A", "B", "C"],
      prizes: this.shuffleArray(),
      userSelectedDoor: null,
      revealedDoor: null,
      userWon: null,
      userSelectedFinal: null
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
          {this.state.revealedDoor && !this.state.userSelectedFinal && (
            <div>
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
                    onClick={() => {
                      this.setState({
                        userSelectedFinal: this.state.userSelectedDoor
                      });
                      this.declareResult();
                    }}
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
