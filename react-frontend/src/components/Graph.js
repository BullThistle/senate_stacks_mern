import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Grid, Card, Header } from 'semantic-ui-react'

export default class Graph extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>
              <a onClick={this.legislatorHandler}>{this.props.obj.org_name}</a>
            </Card.Header>
            <Card.Meta>
              {this.props.obj.pacs}
            </Card.Meta>
            <Card.Description>
              {this.props.obj.total}
              <br/>
              {this.props.obj.indivs}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}