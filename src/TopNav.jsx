import React from "react";
import { Link } from "react-router-dom";

import './App.css';

import { 
    FaLinkedin,
    FaGithubSquare,
    FaEthereum,
    FaTwitter
  } from "react-icons/fa";

function TopNav() {
    return (
      <div class="topnav">
        <div class="topnav-left">
          <Link to="/" class="homelink">leedsrising.com</Link>
          <Link to="/writing">writing</Link>
          <Link to="/projects">projects</Link>
        </div>
        <div class="topnav-right">
          <a href="https://www.linkedin.com/in/leedsrising/">
            <FaLinkedin class="fa-icon"/>
          </a>
          <a href="https://twitter.com/LeedsRising">
            <FaTwitter class="fa-icon"/>
          </a>
          <a href="https://github.com/leedsrising">
            <FaGithubSquare class="fa-icon"/>
          </a>
          <a href="https://etherscan.com/address/0xce2772143637052abddcad413826c736fc5c03ee">
            <FaEthereum class="fa-icon"/>
          </a>
        </div>
      </div>
    )
  }

export default TopNav;