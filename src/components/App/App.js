import React, { Component } from "react";
import "./App.css";

const lul = [0, 0, 0, 0, 0, 0, 0, 0, 0];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      main: 10,
      multiplier: 1.2
    };

    this.handleMainChange = this.handleMainChange.bind(this);
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this);
  }

  handleMainChange(event) {
    this.setState({ main: event.target.value });
  }

  handleMultiplierChange(event) {
    this.setState({ multiplier: event.target.value });
  }

  render() {
    return (
      <div className="app">
        <div className="app__inputs">
          <input
            type="number"
            defaultValue={this.state.main}
            onChange={this.handleMainChange}
          />
          <input
            type="number"
            defaultValue={this.state.multiplier}
            onChange={this.handleMultiplierChange}
          />
        </div>
        <div className="app__list">
          {lul.map((item, index) => {
            return (
              <div
                style={{
                  backgroundColor: "rgb(196, 195, 197)",
                  width: this.state.main * this.state.multiplier * index + "px",
                  height: this.state.main * this.state.multiplier * index + "px"
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
