import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import App from './App';
import './css/hibeats.scss';

render(
  (
    <Router history={history}>
      <App />
    </Router>
  ), document.getElementById('app'),
);
