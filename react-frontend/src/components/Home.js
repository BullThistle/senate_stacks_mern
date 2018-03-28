import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import Map from './Map';

export default class IndexItem extends Component {

    render() {
      return (
        <Container style={{ marginTop: '7em' }}>
          <Grid className="centered">
            <Grid.Row>
              <Header as='h1'>Senate Stacks</Header>
            </Grid.Row>
            <Grid.Row>
              <Map />
            </Grid.Row>
          </Grid>
        </Container>
      );
    }
  }