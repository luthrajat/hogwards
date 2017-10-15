import React, { Component } from 'react';
import axios from 'axios';

export default class ProductBanner extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        posts: {}
      };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    console.log("Tesging...");
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(res => {
      this.setState({ posts: res.data })
      console.log(this.state)
    })
    .catch(err => console.log(err))
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
          <h1>Welcome {this.props.productName}</h1>
          <h6>{this.state.date.toLocaleTimeString()}</h6>
          <h6>{this.state.posts.title}</h6>
        </div>
      )
  }
}
