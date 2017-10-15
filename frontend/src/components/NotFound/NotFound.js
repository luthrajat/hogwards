import React, { Component } from 'react';

export default class NotFound extends React.Component {

  constructor(props) {
      super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return(
        <div>
          <h1>404 - Not Found</h1>
          <h6>{new Date()}</h6>
        </div>
      )
  }
}
