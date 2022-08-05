import React, { Component } from "react";
import "./Content.css";
import Overview from "../pages/overview/Overview";
import Knowledge from "../pages/knowledge/Knowledge";
import Health from "../pages/health/Health";
import Support from "../pages/livesupport/Support";
import Documents from "../pages/documents/Documents";

class Content extends Component {
  render() {
    let loadedPage;
    if (this.props.currpage === "Overview") {
      loadedPage = <Overview />;
    }
    if (this.props.currpage === "Knowledge") {
      loadedPage = <Knowledge />;
    }
    if (this.props.currpage === "Health") {
      loadedPage = <Health />;
    }
    if (this.props.currpage === "Support") {
      loadedPage = <Support />;
    }
    if (this.props.currpage === "Documents") {
      loadedPage = <Documents />;
    }
    return (
      <div className="content">
        <div className="welcome-banner">
          <p>Hi There {this.props.username}</p>
        </div>
        <div className="inner-content">{loadedPage}</div>
      </div>
    );
  }
}

export default Content;
