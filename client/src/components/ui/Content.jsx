import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <p>Hi there {this.props.username}</p>
        <p>Current Page is {this.props.currpage}</p>
      </div>
    );
  }
}

export default Content;
