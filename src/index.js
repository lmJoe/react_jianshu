import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import { Globalstyle } from "./style.js";
import { GlobalstyleFont } from "./statics/iconfont/iconfont.js";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <GlobalstyleFont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
