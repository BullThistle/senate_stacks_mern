import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'semantic-ui-react'

export default class LegislatorCard extends Component {

  constructor(props) {
      super(props);
  }
  
  legislatorHandler = (event) => {
    window.location.assign("/legislator/" + this.props.obj.cid);
  };
  
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>
              <a onClick={this.legislatorHandler}>{this.props.obj.firstlast}</a>
            </Card.Header>
            <Card.Meta>
              {this.props.obj.party}
            </Card.Meta>
            <Card.Description>
              First elected {this.props.obj.first_elected}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}