import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTopic from './components/AddTopic';
import Home from './components/Home';
import UpdateTopic from './components/UpdateTopic';
import State from './components/State';
import Legislator from './components/Legislator';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <div>
    <Header/>
    <Router>
      <div>
        <Switch>
          <Route path='/add' component={AddTopic} />
          <Route exact path='/' component={Home} />
          <Route path='/update/:id' component={UpdateTopic} />
          <Route path='/legislator/:cid' component={Legislator} />
          <Route path='/:states' component={State} />
        </Switch>
      </div>
    </Router>
  </div>
,
  document.getElementById('root')
);