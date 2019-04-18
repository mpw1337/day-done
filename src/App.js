import React, { Component } from "react";
import "./App.css";
import VisualizePercentage from "./Components/VisualizePercentage";

class App extends Component {
  state = {
    percentage: 0,
    timer: 0,
    message: ""
  };
  updatePercentage = () => {
    const percentage = (Date.now() - new Date().setHours(0, 0, 0, 0)) / 864000;
    this.checkMessage(percentage);
    this.setState({ percentage });
  };

  checkMessage = percentage => {
    if (percentage >= 50 && percentage <= 54) {
      this.setState({ message: "Mittagspause!" });
    } else {
      this.setState({ message: "" });
    }
  };
  componentDidMount() {
    this.updatePercentage();
    const timer = setInterval(this.updatePercentage, 2000);
    this.setState({ timer });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Es sind bereits {this.state.percentage.toFixed(3)}% des Tages vorbei.</div>
          Prozent:
          <VisualizePercentage percentage={this.state.percentage} color="#00a000" />
          Promille:
          <VisualizePercentage percentage={(this.state.percentage % 1) * 100} color="#d21738" />
          <div>{this.state.message}</div>
        </header>
      </div>
    );
  }
}

export default App;
