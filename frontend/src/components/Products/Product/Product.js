import React, {Component} from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';



//import './Product.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Product extends React.Component {

  // const styles = {
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     justifyContent: 'space-around',
  //   },
  //   gridList: {
  //     width: 500,
  //     height: 450,
  //     overflowY: 'auto',
  //   },
  // };


  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
        // <div class="card h-100">
        //     <Link className="profile-link" to={`/productdetails/${this.props.id}`}>
        //       <img className="card-img-top" src={this.props.productImage} alt="" />
        //      </Link>
        //     <div className="card-body">
        //       <h4 className="card-title">
        //         <a href="#">{this.props.productName}</a>
        //       </h4>
        //       <h5>${this.props.price}</h5>
        //       <p className="card-text">Twice the joy with these lovely high quality ceramic mugs made by the best artisans and masters of the field in order to make the perfect gift for the person you love. </p>
        //     </div>
        //     <div className="card-footer">
        //       <button type="button" className="btn btn-success">
        //         <span className="glyphicon glyphicon-shopping-cart"></span> Buy Me
        //       </button>
        //     </div>
        // </div>
          <div></div>
    )
  }
}
