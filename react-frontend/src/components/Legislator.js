import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'semantic-ui-react'

export default class Legislator extends Component {

  constructor(props) {
      super(props);
  }
  
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header><a>{this.props.obj.firstlast}</a></Card.Header>
            <Card.Meta>{this.props.obj.party}</Card.Meta>
            <Card.Description>First elected {this.props.obj.first_elected}</Card.Description>
          </Card.Content>
        </Card>
    );
  }
}