import React, { Component } from 'react';
import LegislatorService from '../services/LegislatorService';
import Graph from './Graph';
import LegislatorSummary from './LegislatorSummary';
import axios from 'axios';
import { Container, Grid, Card, Header } from 'semantic-ui-react'
import Loading from 'react-loading-animation';

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
    if(this.state.contributorInformation && this.state.contributorInformation["1"]){
        return <Graph obj={this.state.contributorInformation} />;
      }
    }
    
    summary() {
      if(this.state.candidateInformation && this.state.candidateInformation.cand_name){
          return <LegislatorSummary obj={this.state.candidateInformation}/>;
        }
      }
  
  render() {
    console.log(this.state);
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid columns={2} divided>
          <Grid.Row className="centered">
            <Header>{this.state.candidateInformation.cand_name}</Header>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {this.summary()}
            </Grid.Column>
            <Grid.Column>
              {this.graph()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}