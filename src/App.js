import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    percentage: 0,
    timer: 0,
    message: ""
  };
  updatePercentage = () => {
    const percentage = Math.round(((Date.now() - new Date().setHours(0, 0, 0, 0)) / 864000) * 100) / 100;
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
    const timer = setInterval(this.updatePercentage, 10000);
    this.setState({ timer });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Es sind bereits {this.state.percentage}% des Tages vorbei.</div>
          <div>{this.state.message}</div>
        </header>
      </div>
    );
  }
}

export default App;
