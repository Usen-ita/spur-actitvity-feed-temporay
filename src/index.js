import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import SdgOptions from "./pages/17sdg page/sdgOption"


ReactDOM.render(
  <React.StrictMode>
    <SdgOptions/>
  </React.StrictMode>,
  document.getElementById('Options')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
