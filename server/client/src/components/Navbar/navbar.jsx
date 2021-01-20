/* eslint-disable react/no-unescaped-entities */
import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar_list">
        <li className="navbar_list_item">
          <NavLink
            activeClassName="active"
            className="navbar_list_link"
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar_list_item">
          <NavLink
            activeClassName="active"
            className="navbar_list_link"
            to="/shorten"
          >
            Shorten
          </NavLink>
        </li>
        <li className="navbar_list_item">
          <NavLink
            activeClassName="active"
            className="navbar_list_link"
            to="/URL"
          >
            URL info
          </NavLink>
        </li>
        <li className="navbar_list_item">
          <NavLink
            activeClassName="active"
            className="navbar_list_link"
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
