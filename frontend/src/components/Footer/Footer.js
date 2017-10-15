import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="footer">
            <div className="container">
              <span className="text-muted">TEST</span>
            </div>
      </div>
    );
  }
}
