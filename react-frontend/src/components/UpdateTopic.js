
import React, { Component } from 'react';
import axios from 'axios';
import TopicService from '../services/TopicService';
import { Container, Grid, Form, Button, TextArea, Header } from 'semantic-ui-react'

export default class UpdateTopic extends Component {

  constructor(props) {
      super(props);
      this.topicService = new TopicService();

      //bind the instance to each method
      // (So you can use the THIS statement. Otherwise, it will be null)
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);

      //set the initial state
      this.state = {
        _id: '',
        desc: ''
      };
  }

  componentDidMount(){
    //the parameter ID
    let id =this.props.match.params.id;
    var thisRef = this;
    this.topicService.get(id, function(data){
      thisRef.setState(data);
    });
  }

  handleChange(event) {
    //updates the state only for this parameter
    //(_id stays the same)
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //reference to the component "this"
    var thisRef = this;
    //Update in database
    this.topicService.update(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/');
      }
    );
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Form onSubmit={this.handleSubmit}>
            <Header as='h1'>Edit Comment</Header>
            <input type="hidden" value={this.state._id} />
            <TextArea 
              value={this.state.desc}
              onChange={this.handleChange}  
              style={{ marginBottom: '1em' }}
            />
            <Button primary type="submit">Update</Button>
            <Button secondary onClick={this.handleCancel}>Cancel</Button>
          </Form>
        </Grid>
      </Container>
    );
  }
}