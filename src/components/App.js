import React, { Component } from "react";
import { Header, ScoreBoard, Actions, Result } from "./";

class RockPaperSciccors extends Component {
  constructor(props) {
    super(props);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.setComputerChoice = this.setComputerChoice.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.state = {
      userChosenAction: null,
      computerChosenAction: null,
      result: null,
      resultMsg: null,
      userScore: 0,
      compScore: 0
    };
  }
  handleActionClick(e) {
    this.setComputerChoice();
    this.setState(
      {
        userChosenAction: e.target.getAttribute("data-action")
      },
      () => {
        this.setWinner();
      }
    );
  }

  setComputerChoice() {
    const actionChoices = ["rock", "paper", "sciccors"];
    this.setState({
      computerChosenAction: actionChoices[Math.floor(Math.random() * 3)]
    });
  }
  setWinner() {
    let gameCase =
      this.state.userChosenAction + this.state.computerChosenAction;
    if (this.state.userChosenAction === this.state.computerChosenAction) {
      this.setState({
        result: "draw",
        resultMsg: `It's a draw! You both chose ${this.state.userChosenAction}`
      });
    }
    switch (gameCase) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        this.setState(prevState => {
          return {
            userScore: prevState.userScore + 1,
            resultMsg: "You won!",
            result: null
          };
        });
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        this.setState(prevState => {
          return {
            compScore: prevState.compScore + 1,
            resultMsg: "You lost!",
            result: null
          };
        });
        break;
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <ScoreBoard
          userScore={this.state.userScore}
          compScore={this.state.compScore}
        />
        <Actions onClick={e => this.handleActionClick(e)} />
        <Result resultMessage={this.state.resultMsg} />
      </div>
    );
  }
}

export default RockPaperSciccors;
