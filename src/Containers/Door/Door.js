import React from "react";
import "./Door.css";

class Door extends React.Component {
  state = {
    id: this.props.id,
    prize: this.props.prize,
    colourSelectedDoor: false
  };

  selectDoor() {
    if (this.props.selectedDoor) {
      this.props.selectedDoor(this.props.id);
      this.setState({ colourSelectedDoor: true });
    }
  }
  render() {
    return (
      <div
        className={this.props.colorDoor}
        onClick={() => this.selectDoor(this.props.selectedDoor)}
      >
        <br />
        <h3>{this.props.id}</h3>
        <div className="knob" />
        <br />
      </div>
    );
  }
}

export default Door;
