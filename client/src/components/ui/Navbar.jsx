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

    this.state = { currentPage: "overview" };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ currentPage: e.target.id }, () => {
      console.log(this.state.currentPage);
    });
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
            <button onClick={this.handleClick} id="overview">
              <HomeIcon style={{ fill: "#5c66bd" }} />
              <span>Overview</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handleClick} id="knowledge">
              <SchoolIcon style={{ fill: "#4d7d48" }} />
              <span>Knowledge Base</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handleClick} id="health">
              <FavoriteIcon style={{ fill: "#63182a" }} />
              <span>Health</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handleClick} id="support">
              <ContactSupportIcon style={{ fill: "#5c66bd" }} />
              <span>Live Support</span>
            </button>
          </div>
          <div className="nav-boxes">
            <button onClick={this.handleClick} id="documents">
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
