import '../../App.css';
import React from "react";

import TopNav from '../../TopNav.jsx'

import 'react-pro-sidebar/dist/css/styles.css';

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
