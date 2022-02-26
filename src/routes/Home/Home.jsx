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
          <b>Hello! I'm Leeds</b>
          <div class="description-div description-text">
            <p class="description-text">I'm a PM interested in programming, philosophy, history, startups, and investing. I'm currently working at <div class="Bubble-text"><a href="golden.com" style={{'text-decoration': 'none'}}>Golden</a></div></p>
            <p class="description-text">I started writing in 2021, and want to continually expand this site with what im learning about software development, design, product, their intersection, and everything in between</p>
            <p class="description-text">If you're trying to get in touch, feel free to drop me a DM on <div class="Bubble-text"><a href="https://twitter.com/LeedsRising" style={{'text-decoration': 'none'}}>Twitter</a></div></p>
          </div>
        </p>
      </header>
    </div>
    );
}

export default Home;
