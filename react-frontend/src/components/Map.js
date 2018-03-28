import React, { Component } from 'react';
import USAMap from "react-usa-map";

export default class Map extends Component {
    
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
    
  render() {
    return (
      <div>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}