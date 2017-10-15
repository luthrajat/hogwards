import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import Add from '../Add/Add.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
     width: "90%",
    // height: 450,
  },
};

export default class HomeMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    axios
    .get(`http://localhost:4999/category`)
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

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div align="center">
          <center>
              <GridList
                cellHeight={180}
                cols={5}
                style={styles.gridList} >
                {this.state.items.map((item) => (
                  <Link to={`/products/${item._id}`}>
                    <GridTile
                      key={item._id}
                      title={item.name}
                      subtitle={<span>by <b>{item.subcategory}</b></span>}>
                          <img src={item.imgurl} width={`200px`} />
                    </GridTile>
                  </Link>
                ))}
              </GridList>
          </center>
      </div>
    );
  }
}
