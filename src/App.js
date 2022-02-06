import './App.css';
import React from "react";

import { 
  FaLinkedin,
  FaGithubSquare,
  FaEthereum,
  FaGem,
  FaHeart
} from "react-icons/fa";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function TopNav() {
  
}

function App() {
  return (
    <div className="App">
      <div class="description-div topnav">
        <a href="#home"><b>leedsrising.com</b></a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <header className="App-header">
        <p>
          <div><b>Hello! I'm Leeds</b></div>
          <div class="description-div description-text">
            <p class="description-text">I'm a PM interested in designing consumer data products. I'm currently working at Golden.</p>
            <p class="description-text">I started writing in 2021, and want to continually expand this site with what im learning about software development, design, product, their intersection, and everything in between.</p>
          </div>
        </p>
        <div>
          <a href="https://www.linkedin.com/in/leedsrising/"><FaLinkedin class="fa-linkedin"/></a>
          <a href="https://github.com/leedsrising"><FaGithubSquare class="fa-github"/></a>
          <a href="https://etherscan.com/address/0xce2772143637052abddcad413826c736fc5c03ee"><FaEthereum class="fa-ethereum"/></a>
        </div>
      </header>
    </div>
    );
}

export default App;
