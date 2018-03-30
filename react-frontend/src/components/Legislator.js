import React, { Component } from 'react';
import LegislatorService from '../services/LegislatorService';
import Graph from './Graph';
import axios from 'axios';
import { Container, Grid, Card, Header } from 'semantic-ui-react'
import Loading from 'react-loading-animation';
import { CandidateInformation } from './CandidateInformation';

export default class Legislator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      candidateInformation: {},
      contributorInformation: [],
    };
    this.legService = new LegislatorService();
    this.graph = this.graph.bind(this);
  }

  componentDidMount() {
    var thisRef = this;
    let cid = this.props.match.params.cid;
    this.legService.getLegislator(cid, (data) => {
      let newState = {
        cand_name: data.response.summary["@attributes"].cand_name,
        cash_on_hand: data.response.summary["@attributes"].cash_on_hand,
        spent: data.response.summary["@attributes"].spent,
        chamber: data.response.summary["@attributes"].chamber,
        next_election: data.response.summary["@attributes"].next_election,
        state: data.response.summary["@attributes"].state,
        total: data.response.summary["@attributes"].total
      }
      this.setState({candidateInformation: newState});
    });
    this.legService.getLegislativeContributor(cid, (data) => {
      console.log('Data response', data.response.contributors.contributor);
      let newState = data.response.contributors.contributor;
      this.setState({contributorInformation: newState});
    });
  }
  
  loading() {
    if(!this.state.response) {
      return <Loading />;
    }
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
            <Header>{this.state.candidateInformation.cand_name}</Header>
          </Grid.Row>
          <Grid.Row>
            <Card.Group className="centered">
              <CandidateInformation/>
            </Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}