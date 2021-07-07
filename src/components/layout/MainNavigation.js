import { Link } from "react-router-dom";

import { MdWeb } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

import logo from "../../assets/Untitled-1.png";

//import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className="main-navigation">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link exact to="/dashboard" className="nav-link">
              <MdWeb color="#fff" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/graph" className="nav-link">
              <MdAssessment color="#fff" />
              <span>Graph</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar" className="nav-link">
              <MdDateRange color="#fff" />
              <span>Calendar</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
