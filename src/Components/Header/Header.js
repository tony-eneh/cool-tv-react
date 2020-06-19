import React from "react";
import Menu from "../Menu/Menu";
import logo from "../../images/cool-logo-black.png";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
        <span className="menu-btn" onclick="showMenu(event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 163">
            <g id="hamburger">
              <path
                id="Shape 1"
                className="shp0"
                d="M8 10L220 10L220 43L8 43L8 10Z"
              />
              <path
                id="Shape 1 copy"
                className="shp0"
                d="M8 119L220 119L220 152L8 152L8 119Z"
              />
              <path
                id="Shape 1 copy 2"
                className="shp0"
                d="M8 61L220 61L220 94L8 94L8 61Z"
              />
            </g>
          </svg>
        </span>
        <Menu></Menu>
      </header>
    );
  }
}
