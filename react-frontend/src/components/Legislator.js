import React, { Component } from 'react';
import LegislatorService from '../services/LegislatorService';
import Graph from './Graph';
import axios from 'axios';
import { Container, Grid, Card, Header } from 'semantic-ui-react'
import Loading from 'react-loading-animation';

export default class Legislator extends Component {

  constructor(props) {
    super(props);
    this.state = {items: ''};
    this.legislatorService = new LegislatorService();
    this.graph = this.graph.bind(this);
  }

  componentDidMount() {
    this.fillData();
  }
  
  loading() {
    if(!this.state.response) {
      return <Loading />;
    }
  }
  
  fillData() {
    var cid =this.props.match.params.cid;
    var thisRef = this;
    this.legislatorService.getLegislator(cid, function(data){
      console.log(data);
      thisRef.setState(data);
      console.log('ThisRef', thisRef.state[0].response.contributors["@attributes"].cand_name);
    });
  }

  graph() {
    var thisRef = this;
    // console.log('FROM GRAPH', thisRef.state[0].response.contributors["@attributes"].cand_name);
    // if(this.state[0].response && this.state[0].response.contributors instanceof Array){
    //   console.log('Made it in the graph!');
    //   return this.state.response.contributors.contributor.map(function(object){
    //       return <Graph obj={object["@attributes"]} />;
    //   })
    // }
  }
  
  render() {
    console.log(this.state);
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Grid.Row>
            <Header>Leg</Header>
          </Grid.Row>
          <Grid.Row>
            {this.loading()}
            <Card.Group className="centered">
              {this.graph()}
            </Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}