import React, { Component } from "react";
import "./NavLogin.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

class NavLogin extends Component {
  render() {
    return (
      <div className="navlogin">
        <h3>PROFILE</h3>
        <div className="user-info"></div>
        <button>
          <KeyboardDoubleArrowRightIcon />
          Login
        </button>
      </div>
    );
  }
}

export default NavLogin;
