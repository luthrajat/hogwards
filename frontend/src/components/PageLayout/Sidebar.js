import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Buy from '../Buy/Buy.js';


export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: [], open: false};
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    if (this.state.open) {
        axios
        .get(`http://localhost:4999/cart/demo`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ items: res.data })
          console.log("CART ::: " + this.state)
        })
        .catch(err => console.log(err))
    }
  }

  componentWillUnmount() {
  }


  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    console.log(this.state.items);
    return (
      <div>
        <RaisedButton
          label={this.props.title}
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="Cart" />
            {

              this.state.items.map((item) => (
                <p>
                  <div>{item._id} {item.quantity}</div>
                </p>
            ))}
            <Buy />
        </Drawer>
      </div>
    );
  }
}
