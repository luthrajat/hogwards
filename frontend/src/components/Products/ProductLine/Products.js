import React, {Component} from 'react';
import axios from 'axios';
import './Products.css';
import Product from '../Product/Product.js';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Add from '../../Add/Add.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
     width: "90%",
     'margin-top': '20px'
  },
};

export default class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    axios
    .get(`http://localhost:4999/product/${this.props.match.params.id}`)
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
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          cols={5}
          style={styles.gridList} >
          {this.state.items.map((item) => (
              <GridTile
                key={item._id}
                title={item.name}
                subtitle={<span><b>${item.price}</b></span>}
                actionIcon={<Add productId={item._id} />}>
                  <Link to={`/productdetails/${item._id}`}>
                    <img src={item.imgurl} width={`100%`} />
                  </Link>
              </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}
