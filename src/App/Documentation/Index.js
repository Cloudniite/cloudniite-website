import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import QuickStart from './QuickStart/QuickStart';
import Tutorial from './Tutorial/Tutorial';

import './Index.css';


class DocIndex extends Component {
  render() {
    return (
      <div className="">
        <header className="">
          <h1 className="">Docs</h1>
          <li><Link to="/documentation/quick-start">Quick Start</Link></li>
          <li><Link to="/documentation/tutorial">Tutorial</Link></li>
        </header>

        <Route path="/documentation/quick-start" component={QuickStart} />
        <Route path="/documentation/tutorial" component={Tutorial} />

      </div>
    );
  }
}

export default DocIndex;