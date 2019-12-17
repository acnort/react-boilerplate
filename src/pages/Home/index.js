import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { H1 } from './styles';

class Routes extends Component {
  render() {
    return (
      <div>
        <H1>Acnort Boilerplate</H1>
        <Link to='/about'>About Page</Link>
      </div>
    );
  }
}

export default Routes;
