import React, { Component, Fragment } from "react";

export default class YoutubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleBitrate = () => {
    this.setState((prevState) => {
      return {
        settings: { ...prevState.settings, bitrate: 12 },
      };
    });
  };

  handlerRes = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...prevState.settings,
          video: { ...prevState.settings.video, resolution: "720p" },
        },
      };
    });
  };

  render() {
    return (
      <Fragment>
        <button className="bitrate" onClick={this.handleBitrate}>
          BitRate
        </button>
        <button className="resolution" onClick={this.handlerRes}>
          Res
        </button>
      </Fragment>
    );
  }
}
