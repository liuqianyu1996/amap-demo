import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Map1 from './page/Map1';
import Map2 from './page/Map2';
import Map3 from './page/Map3';
import Map4 from './page/Map4';
import Map5 from './page/Map5';

const AMap = window.AMap;

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="map-box">
          <Map1/>
          <Map2/>
          <Map3/>
          <Map4/>
          <Map5/>
        </div>
      </div>
    );
  }
}

export default App;
