import React, { Component } from 'react';
import LegislatorService from './LegislatorService';
import Graph from './Graph';
import axios from 'axios';
import { Container, Grid, Card, Header } from 'semantic-ui-react'
import Loading from 'react-loading-animation';

export default class Legislator extends Component {

  constructor(props) {
    super(props);
    this.state = {items: ''};
    this.legislatorService = new LegislatorService();
  }

  componentWillMount() {
    this.fillData();
  }
  
  loading() {
    if(!this.state.response) {
      return <Loading />;
    }
  }
  
  fillData() {
    var thisRef = this;
    let cid =this.props.match.params.cid;
    this.legislatorService.getLegislator( cid, function(data){
      thisRef.setState(data);
    });
  }

  graph() {
    if(this.state.response && this.state.response.contributors.contributor instanceof Array){
      var thisRef = this;
      return this.state.response.contributors.contributor.map(function(object){
          return <Graph obj={object["@attributes"]} />;
      })
    }
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Grid.Row>
            <Header as='h1'>Legislator</Header>
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