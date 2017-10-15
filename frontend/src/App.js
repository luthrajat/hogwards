import React, {Component} from 'react';
import ReactRouter from 'react-router';

import logo from './logo.svg';
import './App.css';
import HomeMenu from './components/HomeMenu/HomeMenu.js';

export default class App extends Component {



  render() {
    return (
        <div>
            <h1><p className="text-center" style={{color: '#FFFFFF'}}><span style={{background: '#000000'}}>Welcome to Hogwarts</span></p></h1>
            <h2><p className="text-center" style={{color: '#FFFFFF'}}><span style={{background: '#000000'}}>Experience the castle and its grounds like never before…</span></p></h2>
            <HomeMenu />
        </div>
    );
  }
}

// export default App;
