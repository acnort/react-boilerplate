import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globals';
import { Home, About } from './pages';

class Routes extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
