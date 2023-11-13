import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import pogImg from './poggers.png';
import classes from './App.css'
import Home from './containers/Home/Home';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={pogImg} className="Pog-logo" alt="logo" />
        <p>
          WEBSITE YEAAAAAA
        </p>
      </header>
    </div>
  );
}

export default App;
