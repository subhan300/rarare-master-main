import React from "react";
import { Link } from "react-router-dom";
// 
import { Icon, InlineIcon } from '@iconify/react';
import baselineKeyboardArrowDown from '@iconify-icons/ic/baseline-keyboard-arrow-down';

import "./style.css";
// assets
import rarareLogo from "../Assets/logo_rarare.png";
import LanguageDropdown from "../Components/Dropdown/LanguageDropdown.jsx";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-expand-lg c_navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="nav_rarare_logo" src={rarareLogo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Report an issue
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Post a survey
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Proposal">
                  Proposals
                </a>
              </li>
              <li className="nav-item position_relative">
                <Link to="#" className="nav-link">
                  <span className="menu-title">Business</span>
                  <Icon
                    className="fs-5 down_arrow"
                    icon={baselineKeyboardArrowDown}
                  />
                </Link>
                <div className="submenu">
                  <ul className="submenu-item text_lightgray">
                    <li className="nav-item">                     
                        Mobile Device Management
                    </li>
                    <li className="nav-item">                     
                        Connectivity Enabled Healthcare
                    </li>
                    <li className="nav-item">                     
                        Citizen Engagment
                    </li>
                    <li className="nav-item">                     
                        Online Consensus Forming
                    </li>
                    <li className="nav-item">                     
                        Particularly Budgeting
                    </li>
                    <li className="nav-item">                     
                        Democratic Technology
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <LanguageDropdown />
              </li>
              <li className="nav-item">
                <Link to='/signup'>
                <button className="btn s_btn" >Sign up</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/login'>
                <button className="bg_lightgreen text-white c_btn">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </React.Fragment>
  );
};

export default Navbar;
