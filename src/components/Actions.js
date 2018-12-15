import React, { Component } from "react";

class Actions extends Component {
  render() {
    return (
      <div className="actionContainer">
        <div onClick={this.props.onClick} data-action="rock" />
        <div onClick={this.props.onClick} data-action="paper" />
        <div onClick={this.props.onClick} data-action="scissors" />
      </div>
    );
  }
}

export { Actions };
