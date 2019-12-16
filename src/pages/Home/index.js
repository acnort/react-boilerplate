import React, { Component } from "react";
import { Link } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        <h1>Acnort Boilerplate</h1>
        <Link to="/about">About Page</Link>
      </div>
    );
  }
}

export default Routes;
