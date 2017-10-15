import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios';

const style = {
  marginRight: 20,
};


export default class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  alertMessage(id) {
    axios
    .get(`http://localhost:4999/cart/demo/`+id)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ items: res.data })
      console.log(this.state)
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <FloatingActionButton mini={true} style={style}>
          <ContentAdd  onClick={this.alertMessage.bind(this, `${this.props.productId}`)}/>
        </FloatingActionButton>
      </div>
    );
  }
}
