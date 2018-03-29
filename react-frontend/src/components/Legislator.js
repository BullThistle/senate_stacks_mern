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
    this.contributors;
    this.summary;
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
    var contributors = this.contributors;
    var summary = this.summary;
    var cid =this.props.match.params.cid;
    this.legislatorService.getLegislator( cid, function(data){
      contributors = data[0].response.contributors;
      summary =  data[1].response.summary;
      console.log('SUMMARYY', summary);
      console.log('CONTRIBS', contributors);
      console.log('DAMN NAME', this.contributors["@attributes"].cand_name)
    });
  }

  graph() {
    if(this.contributors && this.contributors.contributor instanceof Array){
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
            <Header as='h1'>Name</Header>
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