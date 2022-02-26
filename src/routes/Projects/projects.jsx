import '../../App.css';
import React from 'react';

import TopNav from '../../TopNav.jsx'

export default function Projects() {
    return (
      <div class="Home">
        <TopNav/>
        <main style={{ padding: "1rem 0" }}>
          <h2>Projects</h2>
          <div style={{"padding-bottom": "35px"}}>
            <a href="https://apps.apple.com/us/app/groopcam/id1496034307" class="mui-override">GroopCam</a>
          </div>
          <div>
            <a href="https://apps.apple.com/us/app/groopcam/id1496034307" class="mui-override">Iris Photo</a>
          </div>
        </main>
      </div>
    );
  }