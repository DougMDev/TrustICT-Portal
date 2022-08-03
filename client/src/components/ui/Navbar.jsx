import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: "Overview" };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ currentPage: "Test Page" });
  }
  render() {
    return (
      <div>
        <div className="branding">
          <h2>TrustICT</h2>
          <span>Web Portal</span>
        </div>
        <div className="navlink">
          <button onClick={this.handleClick}>Overview</button>
          <button onClick={this.handleClick}>Knowledge Base</button>
          <button onClick={this.handleClick}>Health</button>
          <button onClick={this.handleClick}>Live Support</button>
          <button onClick={this.handleClick}>Documents</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
