// Code DigitalClicker Component Here
import React, { Component, Fragment } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        timesClicked: previousState.timesClicked + 1,
      };
    });
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </Fragment>
    );
  }
}
