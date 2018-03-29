import React, { Component } from 'react';
import LegislatorService from './LegislatorService';
import axios from 'axios';
import LegislatorCard from './LegislatorCard';
import { Container, Grid, Form, Button, TextArea, Header, Table, Card } from 'semantic-ui-react'
import Loading from 'react-loading-animation';

export default class State extends Component {

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
    let states =this.props.match.params.states;
    this.legislatorService.getLegislatorsFromState(states, function(data){
      thisRef.setState(data);
    });
  }

  legislator() {
    if(this.state.response && this.state.response.legislator instanceof Array){
      var thisRef = this;
      return this.state.response.legislator.map(function(object){
          return <LegislatorCard obj={object["@attributes"]} />;
      })
    }
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Grid.Row>
            <Header as='h1'>Legislators</Header>
          </Grid.Row>
          <Grid.Row>
            {this.loading()}
            <Card.Group className="centered">
              {this.legislator()}
            </Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}