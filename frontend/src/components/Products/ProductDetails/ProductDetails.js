import React, { Component } from 'react';
import axios from 'axios';
import Buy from '../../Buy/Buy.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Add from '../../Add/Add.js';

export default class ProductDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {items: []};
  }

  componentDidMount() {
    // console.log(`${this.props.match.params.id}`);
    axios
    .get(`http://localhost:4999/productdetails/${this.props.match.params.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ items: res.data })
      console.log(this.state)
    })
    .catch(err => console.log(err))
  }

  componentWillUnmount() {
  }

  render() {
      return(
          <div className="container">
            <br/>
            <div className="panel panel-default">

              <div className="panel-heading">{this.state.items.name}</div>
              <div>
                  <img src={this.state.items.imgurl}/>
                  <table>
                    <tr>
                      <td>Price: ${this.state.items.price}</td>
                      <td style={{align: 'center'}}><Add productId={this.state.items._id} /></td>
                    </tr>
                  </table>

                    {/* <tr>
                      <td>Description</td>
                      <td>{this.state.items.price}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                  Price: <div className="panel-body">${this.state.items.price}</div>
                  <div className="panel-body">Seller</div>
                  <div className="panel-body">Description</div>
                  <div className="panel-body">Category</div> */}
                  </div>
            </div>
          </div>
        // <div>
        //   Product Details: {this.state.item}
        //   Name: {this.state.items.name}
        //   ID: {this.state.items.name}
        //   <Add productId={this.props.match.params.id} />
        // </div>
      )
  }
}
