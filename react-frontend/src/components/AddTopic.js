import React, { Component } from 'react';
import TopicService from './TopicService';
import { Container, Grid, Form, Button, TextArea, Header } from 'semantic-ui-react'

export default class AddTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.topicService = new TopicService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.topicService.add(this.state.value,()=>{
      this.props.history.push('/');
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Form onSubmit={this.handleSubmit}>
            <Header as='h1'>Add Comment</Header>
              <TextArea 
                value={this.state.value} 
                onChange={this.handleChange} 
                style={{ marginBottom: '1em' }}
              />
            <Button primary type="submit">Add</Button>
            <Button secondary onClick={this.handleCancel}>Cancel</Button>
          </Form>
        </Grid>
      </Container>
    );
  }
}