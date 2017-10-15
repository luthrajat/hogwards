import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

export default class ProductBanner extends React.Component {

  constructor(props) {
      super(props);
      this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
      this.setState({
        date: new Date()
      });
    }

  render() {
      return(
        <div>
          <li><Link to="/">Home</Link></li>
          <h1>Welcome to {this.props.productName}</h1>
          <h6>{this.state.date.toLocaleTimeString()}</h6>
        </div>
      )
  }
}
