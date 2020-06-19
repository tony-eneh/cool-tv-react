import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import profileIcon from "../../images/person-icon.png";
import settingsIcon from "../../images/cog.png";
import loveIcon from "../../images/love-icon.png";
import logoutIcon from "../../images/logout.png";

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <span className="close-btn hidden-menu" onclick="hideMenu(event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <g id="Folder 1">
              <path
                id="Background"
                className="shp0"
                d="M58.27 18.02L478.94 438.7L438.67 478.96L18 58.29L58.27 18.02Z"
              />
              <path
                id="Layer 1"
                className="shp0"
                d="M439.73 18.02L480 58.29L59.33 478.96L19.06 438.7L439.73 18.02Z"
              />
            </g>
          </svg>
        </span>
        <ul className="main-menu hidden-menu">
          <li>
            <Link to=''>
              <img src={profileIcon} alt="" />
              Profile
            </Link>
          </li>
          <li>
            <Link to=''>
              <img src={settingsIcon} alt="" />
              Settings
            </Link>
          </li>
          <li>
            <Link to=''>
              <img src={loveIcon} alt="" />
              Favourites
            </Link>
          </li>
          <li>
            <Link to=''>
              <img src={logoutIcon} alt="" />
              Logout
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
