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
    const { currpage } = this.state;
    return (
      <div className="dashboard">
        <Navbar handlePageChange={this.handlePageChange} currpage={currpage} />
        <Content
          handlePageChange={this.handlePageChange}
          username={"Doug"}
          currpage={currpage}
        />
      </div>
    );
  }
}

export default App;
