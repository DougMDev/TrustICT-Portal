import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Content from "./components/ui/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = { currpage: "Overview" };
  }

  handlePageChange(newPage) {
    this.setState({ currpage: newPage });
  }

  render() {
    return (
      <div className="dashboard">
        <Navbar
          handlePageChange={this.handlePageChange}
          currpage={this.state.currpage}
        />
        <Content
          handlePageChange={this.handlePageChange}
          username={"Guest"}
          notifications={"0"}
          currpage={this.state.currpage}
        />
      </div>
    );
  }
}

export default App;
