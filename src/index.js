/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/elagent-icon/style.css';
import './assets/etline-icon/style.css';
import './assets/flaticon/flaticon.css';
import './assets/css/animate.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
