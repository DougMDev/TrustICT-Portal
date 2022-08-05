import React, { Component } from "react";
import "./Navbar.css";
import tptLogo from "../../media/tptlogo.png";
import NavLogin from "./NavLogin";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArticleIcon from "@mui/icons-material/Article";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e) {
    this.props.handlePageChange(e.currentTarget.value);
  }
  render() {
    return (
      <div className="navbar">
        <div className="branding">
          <img src={tptLogo} alt="the partnership trust logo"></img>
          <h2>TrustICT Support</h2>
          <span>Web Portal</span>
        </div>
        <div className="navlinks">
          <span>MENU</span>
          <div className="nav-boxes">
            <button onClick={this.handlePageChange} value="Overview">
              <HomeIcon style={{ fill: "#5c66bd" }} />
              <span>Overview</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handlePageChange} value="Knowledge">
              <SchoolIcon style={{ fill: "#4d7d48" }} />
              <span>Knowledge Base</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handlePageChange} value="Health">
              <FavoriteIcon style={{ fill: "#63182a" }} />
              <span>Health</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handlePageChange} value="Support">
              <ContactSupportIcon style={{ fill: "#5c66bd" }} />
              <span>Live Support</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handlePageChange} value="Documents">
              <ArticleIcon style={{ fill: "#8a7f1c" }} />
              <span>Documents</span>
            </button>
          </div>
        </div>
        <NavLogin />
      </div>
    );
  }
}

export default Navbar;
