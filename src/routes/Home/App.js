import '../../App.css';
import React from "react";
import { Link } from "react-router-dom";

import { 
  FaLinkedin,
  FaGithubSquare,
  FaEthereum
} from "react-icons/fa";

import 'react-pro-sidebar/dist/css/styles.css';

function TopNav() {
  return (
    <div class="topnav">
      <div class="topnav-left">
        <Link to="/home" class="homelink">leedsrising.com</Link>
        <Link to="/writing">writing</Link>
        <Link to="/projects">projects</Link>
      </div>
      <div class="topnav-right">
        <a href="https://www.linkedin.com/in/leedsrising/"><FaLinkedin class="fa-linkedin fa-icon"/></a>
        <a href="https://github.com/leedsrising"><FaGithubSquare class="fa-github fa-icon"/></a>
        <a href="https://etherscan.com/address/0xce2772143637052abddcad413826c736fc5c03ee"><FaEthereum class="fa-ethereum fa-icon"/></a>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div class="Home">
      <TopNav/>
      <header className="Home Home-header">
        <p>
          <div><b>Hello! I'm Leeds</b></div>
          <div class="description-div description-text">
            <p class="description-text">I'm a PM interested in designing consumer data products. I'm currently working at Golden.</p>
            <p class="description-text">I started writing in 2021, and want to continually expand this site with what im learning about software development, design, product, their intersection, and everything in between.</p>
          </div>
        </p>
      </header>
    </div>
    );
}

export default Home;
