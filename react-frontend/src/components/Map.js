import React, { Component } from 'react';
import USAMap from "react-usa-map";
import MapService from './MapService';
import '../styles/Map.css';

export default class Map extends Component {
  
  constructor(props) {
    super(props);
    this.mapService = new MapService();
  }
  
  mapHandler = (event) => {
    window.location.assign("/" + event.target.dataset.name.toLowerCase());
  };
    
  render() {
    return (
      <div>
        <USAMap customize={this.mapService.statesColor()} onClick={this.mapHandler} />
      </div>
    );
  }
}