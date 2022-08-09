import React from "react";
import "./UsefulLinks.css";
import MSStream from "../../../media/msStream.png";
//Material UI Icons
import cTptLogo from "../../../media/coloured_tptlogo.png";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TerminalIcon from "@mui/icons-material/Terminal";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PrintIcon from "@mui/icons-material/Print";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import AppleIcon from "@mui/icons-material/Apple";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
//School Logos
import FosseWay from "../../../media/logos/fosseway-logo-1.jpg";
import AbbotA from "../../../media/logos/abbota.jpg";
import Cameley from "../../../media/logos/Cameley-school-logo-581.jpg";
import ChewM from "../../../media/logos/Chew-Magna-logo.jpg";
import Farmb from "../../../media/logos/Farmborough_logo_round_581.jpg";
import Hayesdown from "../../../media/logos/Hayesdown-Logo.gif";
import Marksbury from "../../../media/logos/marksburycofe_logo.jpg";
import Wasps from "../../../media/logos/Wasps-Logo-FINAL.jpg";
import Nunney from "../../../media/logos/nunney-logo-581.jpg";
import Paulton from "../../../media/logos/paulton-infant-school-logo-square.jpg";
import Pensford from "../../../media/logos/Pensford-Logo.jpg";
import Roundhill from "../../../media/logos/roundhill.jpg";
import StMarys from "../../../media/logos/St-Marys-School-Colour.jpg";
import Castle from "../../../media/logos/Castle-Logo.jpg";
import Mendip from "../../../media/logos/tms.jpg";

export default function UsefulLinks() {
  return (
    <div className="links-content">
      <h2>Welcome to the Links Page</h2>
      <p>
        Here you can find some useful pages the IT team feel you may need! If
        theres anything you'd like added then please let us know.
      </p>
      <div className="grid-block">
        <div className="form-block grid-item">
          <h3 className="form-title">Forms</h3>
          <p className="form-para">
            All of our forms are submitted online to reduce paper waste and easy
            access, follow the link and submit the required form. We will be
            notified via email and a ticket will be created on our Helpdesk
            system.
          </p>
          {/* FORMS LIST AND DETAILS MINIMIZED EXPAND HERE */}
          <div className="forms-list">
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/zq9YLWqmqF"
                target="_blank"
                rel="noreferrer"
              >
                <GroupAddIcon />
                <span className="form-name">New User Request</span>
              </a>
            </div>
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/mbbFfg1wuV"
                target="_blank"
                rel="noreferrer"
              >
                <TerminalIcon />
                <span className="form-name">New Software Request</span>
              </a>
            </div>
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/Tw95wyxixM"
                target="_blank"
                rel="noreferrer"
              >
                <PrintIcon />
                <span className="form-name">Printer/Scan Access Request</span>
              </a>
            </div>
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/cfmTY7a70d"
                target="_blank"
                rel="noreferrer"
              >
                <FolderSharedIcon />
                <span className="form-name">School Folder Access</span>
              </a>
            </div>

            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/i6txD1J24J"
                target="_blank"
                rel="noreferrer"
              >
                <CloudDoneIcon />
                <span className="form-name">Sharepoint Folder Access</span>
              </a>
            </div>
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/6Bqh3JBcWW"
                target="_blank"
                rel="noreferrer"
              >
                <AppleIcon />
                <span className="form-name">iPad App Request</span>
              </a>
            </div>
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/bT7JBncSPy"
                target="_blank"
                rel="noreferrer"
              >
                <FilterAltIcon />
                <span className="form-name">Proxy Filtering Changes</span>
              </a>
            </div>
            <div className="form-item">
              <a
                className="form-item-link"
                href="https://forms.office.com/r/i2Pspk6M0C"
                target="_blank"
                rel="noreferrer"
              >
                <FeedbackIcon />
                <span className="form-name">IT Service Feedback</span>
              </a>
            </div>
          </div>
        </div>
        <div className="policies-block grid-item">
          <h3>Policies and Services</h3>
        </div>
        <div className="links-block grid-item">
          <h3>Some Links you may find useful!</h3>
          <p>
            Feel free to submit any links you want saved here for easy access
            and we will be happy to add them
          </p>
          <div className="links-list">
            <a href="https://login.staffproxy" target="_blank" rel="noreferrer">
              Staff Proxy (Unfiltered Access)
            </a>
            <a href="portal.office365.com" target="_blank" rel="noreferrer">
              Office365 Sign In
            </a>
            <a
              href="https://safetynet.rm.com/"
              target="_blank"
              rel="noreferrer"
            >
              SafetyNet Sign In
            </a>
            <a
              href="https://trust-ict-service-status.pagefate.com/"
              target="_blank"
              rel="noreferrer"
            >
              System Server Status
            </a>
            <a
              href="https://outlook.office.com/mail/"
              target="_blank"
              rel="noreferrer"
            >
              Outlook Online
            </a>
          </div>
        </div>
        <div className="resources-block grid-item">
          <h3>Useful Resources</h3>
          <div className="resources">
            <img src={MSStream} alt="stream icon"></img>
            <a href="https://web.microsoftstream.com/channel/bd15402e-7ca7-4438-b2b7-f592535489a6">
              TrustICT Stream Site
            </a>
            <p>
              Videos are feautred on how to do common tasks you or issues you
              may encounter using the system
            </p>
          </div>
        </div>
        <div className="schools-block grid-item">
          <h4>
            Schools within Our Trust - Click on an Image to visit the schools
            current Website
          </h4>
          <span>
            We do not support all schools listed here at this current time.
          </span>
          <div className="school-logos-block">
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={FosseWay}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={AbbotA} alt="school logo"></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={Cameley}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={Castle} alt="school logo"></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={ChewM} alt="school logo"></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={Farmb} alt="school logo"></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={Hayesdown}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={Marksbury}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={Wasps} alt="school logo"></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={Nunney} alt="school logo"></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={Paulton}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={Pensford}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={Roundhill}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img
                className="school-logo"
                src={StMarys}
                alt="school logo"
              ></img>
            </a>
            <a href="www.fossewayschool.com" target="_blank" rel="noreferrer">
              <img className="school-logo" src={Mendip} alt="school logo"></img>
            </a>
          </div>
        </div>
        <div className="tpt-block grid-item">
          <img src={cTptLogo} alt="The Partnership Trust logo"></img>
          <a
            href="https://www.thepartnershiptrust.com"
            target="_blank"
            rel="noreferrer"
          >
            Click to Visit The Partnership Trust Homepage
          </a>
        </div>
        <div className="submit-block grid-item">
          <h4>Submit a Helpdesk Ticket</h4>
          <p>
            We aim to respond to tickets within 2 hours of submission. Phoning
            should only be done in an emergency.{" "}
            <span>Office Number : 01761 404204</span>
          </p>
          <div className="sub-buttons">
            <button id="sub-online">
              <a
                href="https://tptictservice.on.spiceworks.com/portal"
                target="_blank"
                rel="noreferrer"
              >
                Submit Online
              </a>
            </button>
            <button id="sub-email">
              <a href="mailto:help@tptictservice.on.spiceworks.com">
                Submit via Email
              </a>
            </button>
          </div>
          <p>
            Ticket submissions via online form will need to be verified so may
            result in slower completion
          </p>
        </div>
      </div>
    </div>
  );
}
