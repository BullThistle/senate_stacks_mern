import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

export default class ListTopicRow extends Component {

  constructor(props) {
      super(props);
  }
  
  render() {
    return (
        <tr>
          <td>
            <Icon name='window close' id={this.props.obj._id} onClick={this.props.onDelete} value="Delete"></Icon>
            <a id={this.props.obj._id} onClick={this.props.onUpdate} href="">{this.props.obj.desc}</a>
          </td>
        </tr>
    );
  }
}