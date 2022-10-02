import '../../App.css';
import React from "react";

import TopNav from '../../TopNav.jsx'

import 'react-pro-sidebar/dist/css/styles.css';

function Home() {
  return (
    <div class="Home dont-break-out teel-underscore">
      <TopNav class="dont-break-out"/>
      <div>
        <p class="description-text">
          <b>Hello! I'm Leeds</b>
        </p>
        <p class="description-text">I'm a PM at <a href="https://golden.com">Golden</a>, where my role has spanned product, design, management, and research across Golden.com and the Golden Protocol. My interests include product design, programming, philosophy, startups, investing, and photography.</p>
      </div>
    </div>
    );
}

export default Home;
