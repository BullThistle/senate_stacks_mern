import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTopic from './components/AddTopic';
import Home from './components/Home';
import UpdateTopic from './components/UpdateTopic';
import State from './components/State';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <div>
    <Header/>
    <Router>
      <div>
        <Route path='/add' component={AddTopic} />
        <Route exact path='/' component={Home} />
        <Route path='/update/:id' component={UpdateTopic} />
        <Route path='/:states' component={State} />
      </div>
    </Router>
  </div>
,
  document.getElementById('root')
);