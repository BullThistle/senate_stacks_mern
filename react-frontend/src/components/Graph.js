import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import {PieChart, Pie, Legend, Tooltip} from 'recharts';

export default class Graph extends Component {

  constructor(props) {
    super(props);
    console.log('PROPS', this.props.obj);
    this.data = [
      {
        name: this.props.obj["0"]["@attributes"].org_name, 
        value: this.props.obj["0"]["@attributes"].total / 1000
      }, 
      {
        name: this.props.obj["1"]["@attributes"].org_name, 
        value: this.props.obj["1"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["2"]["@attributes"].org_name, 
        value: this.props.obj["2"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["3"]["@attributes"].org_name, 
        value: this.props.obj["3"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["4"]["@attributes"].org_name, 
        value: this.props.obj["4"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["5"]["@attributes"].org_name, 
        value: this.props.obj["5"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["6"]["@attributes"].org_name, 
        value: this.props.obj["6"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["7"]["@attributes"].org_name, 
        value: this.props.obj["7"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["8"]["@attributes"].org_name, 
        value: this.props.obj["8"]["@attributes"].total / 1000
      },
      {
        name: this.props.obj["9"]["@attributes"].org_name, 
        value: this.props.obj["9"]["@attributes"].total / 1000
      },
    ]
  }
  
  
  render() {
    return (
      <Grid className="centered">
        <p>Top contributors (in thousands)</p>
        <PieChart width={1000} height={400}>
          <Pie data={this.data} cx={500} cy={200} innerRadius={60} outerRadius={120} fill="#6a8fc3" label/>
          <Tooltip/>
        </PieChart>
      </Grid>
    );
  }
}