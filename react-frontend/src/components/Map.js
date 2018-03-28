import React, { Component } from 'react';
import USAMap from "react-usa-map";

export default class Map extends Component {
  
  mapHandler = (event) => {
    window.location.assign("/" + event.target.dataset.name.toLowerCase());
  };
    
  render() {
    return (
      <div>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}