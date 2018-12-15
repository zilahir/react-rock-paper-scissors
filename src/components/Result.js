import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <h1>{this.props.resultMessage}</h1>
      </div>
    );
  }
}

export { Result };
