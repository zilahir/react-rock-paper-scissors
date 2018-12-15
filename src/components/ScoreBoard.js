import React, { Component } from "react";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: null
    };
  }
  render() {
    return (
      <div>
        <div className="scoreBoard">
          <div>user</div>
          <span>
            {this.props.userScore}:{this.props.compScore}
          </span>
          <div>comp</div>
        </div>
      </div>
    );
  }
}

export { ScoreBoard };
