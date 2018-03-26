
import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

export default class State extends Component {
  
  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <h1>state</h1>
        </Grid>
      </Container>
    );
  }
}