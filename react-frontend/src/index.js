//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTopic from './components/AddTopic';
import ListTopic from './components/ListTopic';
import UpdateTopic from './components/UpdateTopic';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header/>
      </div>
    </div>
    <div>
      <Router>
      <div>
      <Route path='/add' component={AddTopic} />
      <Route exact path='/' component={ListTopic} />
      <Route path='/update/:id' component={UpdateTopic} />
      </div>
      </Router>
    </div>
  </div>
,
  document.getElementById('root')
);