import React, { Component } from 'react';
import TopicService from './TopicService';
import { Container, Grid, Form, Button, TextArea } from 'semantic-ui-react'

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
            <Form>
              <form onSubmit={this.handleSubmit}>
                <div className="panel panel-default">
                  <div className="panel-heading">Add Comment</div>
                  <div className="panel-body">
                  <p>Comment description</p>
                    <TextArea 
                      value={this.state.value} 
                      onChange={this.handleChange} 
                      style={{ marginBottom: '1em' }}
                    />
                  </div>
                  <div className="panel-footer">
                  <Button primary type="submit">Add</Button>
                  <Button secondary onClick={this.handleCancel}>Cancel</Button>
                  </div>
                </div>
              </form>
            </Form>
          </Grid>
        </Container>
      );
    }
  }