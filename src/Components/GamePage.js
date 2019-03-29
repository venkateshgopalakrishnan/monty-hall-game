import React from "react";
import Door from "./Door";
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
    prizes: this.shuffleArray(),
    userSelectedDoor: null,
    revealedDoor: null,
    userWon: null,
    userSelectedFinal: null
  };

  userSelection(id) {
    this.setState({ userSelectedDoor: id });
    if (this.state.userSelectedDoor) {
    }
  }

  revealDoor() {
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
    this.state.revealedDoor = id;
    return <h2>Door {id} has a goat behind it</h2>;
  }

  changeChoice() {
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
  }

  render() {
    return (
      <div>
        {this.state.isPlayClicked === false ? (
          <button
            class="button"
            onClick={() => this.setState({ isPlayClicked: true })}
          >
            <span>Play</span>
          </button>
        ) : (
          <div>
            Game has started
            <br />
            <br />
            <Container align="center">
              <Row>
                <Col xs={4}>
                  <Door
                    id={"A"}
                    selectedDoor={
                      !this.state.userSelectedDoor &&
                      (id => this.userSelection(id))
                    }
                  />
                </Col>
                <Col xs={4}>
                  <Door
                    id={"B"}
                    selectedDoor={
                      !this.state.userSelectedDoor &&
                      (id => this.userSelection(id))
                    }
                  />
                </Col>
                <Col xs={4}>
                  <Door
                    id={"C"}
                    selectedDoor={
                      !this.state.userSelectedDoor &&
                      (id => this.userSelection(id))
                    }
                  />
                </Col>
              </Row>
              <br />
              {this.state.userSelectedDoor && !this.state.userSelectedFinal && (
                <div>
                  <h4>
                    Now I would like to reveal one door which has a goat behind
                    it
                  </h4>
                  {this.revealDoor()}
                  <h4>Do you want to change your choice to the other door</h4>
                  <Row>
                    <Col xg={6}>
                      <button
                        className="button"
                        style={{ fontSize: "30px" }}
                        onClick={() => this.changeChoice()}
                      >
                        Yes
                      </button>
                    </Col>
                    <Col xg={6}>
                      <button
                        className="button"
                        style={{ fontSize: "30px" }}
                        onClick={() =>
                          this.setState({
                            userSelectedFinal: this.state.userSelectedDoor
                          })
                        }
                      >
                        No Way _|_
                      </button>
                    </Col>
                  </Row>
                </div>
              )}
              {this.state.userSelectedFinal != null &&
                (this.state.userSelectedFinal === "A" &&
                this.state.prizes[0] === "Car"
                  ? (this.state.userWon = true)
                  : this.state.userSelectedFinal === "B" &&
                    this.state.prizes[1] === "Car"
                  ? (this.state.userWon = true)
                  : this.state.userSelectedFinal === "C" &&
                    this.state.prizes[2] === "Car"
                  ? (this.state.userWon = true)
                  : (this.state.userWon = false))}
              {this.state.userWon && this.state.userWon === true ? (
                <h2>You won</h2>
              ) : this.state.userWon === false ? (
                <h2>You Lost</h2>
              ) : null}
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default GamePage;
