import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Table, Header } from 'semantic-ui-react';

export default class LegislatorSummary extends Component {

  constructor(props) {
    super(props);
    console.log('SUMM PROPS', this.props.obj);

  }
  
  
  render() {
    return (
      <div>
        <p style={{ textAlign: 'center', marginBottom: '4em'}}>Legislator summary</p>
        <Table basic='very' celled collapsing style={{ marginTop: '4em', display: 'table', margin: '0 auto' }}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    State
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                  {this.props.obj.state}
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    Chamber
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {this.props.obj.chamber}
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                      Next election
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {this.props.obj.next_election}
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                      Cash spent
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {this.props.obj.spent}
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    Cash on hand
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {this.props.obj.cash_on_hand}
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    Cash total
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {this.props.obj.total}
              </Table.Cell>
            </Table.Row>
            
          </Table.Body>
        </Table>
      </div>
    );
  }
}