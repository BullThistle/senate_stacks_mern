import React, { Component } from 'react';
import TopicService from './TopicService';
import axios from 'axios';
import ListTopicRow from './ListTopicRow';
import { Container, Grid, Form, Button, TextArea, Header, Table } from 'semantic-ui-react'

export default class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.topicService = new TopicService();

      //bind
      this.onDelete = this.onDelete.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }
    componentWillMount(){
      this.fillData();
    }

    fillData() {
      var thisRef = this;
      this.topicService.all((data)=>{
          thisRef.setState({ items: data });
      })
    }

    tabRow(){
      if(this.state.items instanceof Array){

        var thisRef = this;
        return this.state.items.map(function(object, i){
            return <ListTopicRow onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
        })
      }
    }

    onDelete(event) {
      let id = event.target.id;
      var thisRef = this;
      this.topicService.delete(id,()=>{
        thisRef.fillData();
      });
    }

    onUpdate(event) {
      let id = event.target.id;
      this.props.history.push('/update/'+id);
    }

    handleAdd() {
      this.props.history.push('/add');
    }

    render() {
      return (
        <Container style={{ marginTop: '7em' }}>
          <Grid className="centered">
            <Grid.Row>
              <Header as='h1'>List of Comments</Header>
            </Grid.Row>
            <Grid.Row>
              <Table id="topic-list" style={{ width: '30em' }}>
                <Table.Body>
                  {this.tabRow()}
                </Table.Body>
              </Table>
            </Grid.Row>
            <Grid.Row>
              <Button primary onClick={this.handleAdd}>Add</Button>
            </Grid.Row>
          </Grid>
        </Container>
      );
    }
  }