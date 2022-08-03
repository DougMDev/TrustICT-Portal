import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Content from "./components/ui/Content";

class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
