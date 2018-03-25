import React, { Component } from 'react';
import TopicService from './TopicService';
import axios from 'axios';
import ListTopicRow from './ListTopicRow';
import { Container, Grid, Form, Button, TextArea } from 'semantic-ui-react'

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
            <div className="panel panel-default">
              <div className="panel-heading">List of Comments</div>
              <div className="panel-body">
              <p>Click on the comment to edit</p>
                <table id="topic-list" className="table table-bordered">
                  <tbody>
                    {this.tabRow()}
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <Button primary onClick={this.handleAdd}>Add</Button>
              </div>
            </div>
          </Grid>
        </Container>
      );
    }
  }