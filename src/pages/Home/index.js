import React, { Component } from 'react';

import { H1 } from './styles';

class Home extends Component {
  render() {
    return (
      <div>
        <H1>Acnort Boilerplate</H1>
        <a href='/about'>About Page</a>
      </div>
    );
  }
}

export default Home;
