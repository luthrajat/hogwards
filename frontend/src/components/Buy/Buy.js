import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const BuyButton = () => (
  <RaisedButton label="Buy" secondary={true} style={style} />
);

export default BuyButton;
