import React, { Component } from "react";
import Filler from "./Filler";
import "./VisualizePercentage.css";

class VisualizePercentage extends Component {
  render() {
    return (
      <div className="progress-bar">
        <Filler percentage={this.props.percentage} color={this.props.color} />
      </div>
    );
  }
}

export default VisualizePercentage;
