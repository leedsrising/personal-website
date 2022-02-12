import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './routes/Home/App';
import Projects from "./routes/projects";
import Writing from "./routes/writing";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="#projects" element={<Projects />} />
        <Route path="#writing" element={<Writing />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
