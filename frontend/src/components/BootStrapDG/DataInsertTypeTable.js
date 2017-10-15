import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const jobTypes = [ 'A', 'B', 'C', 'D' ];
const jobs = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];


export default class DataInsertTypeTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ jobs } insertRow={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' editable={ { type: 'textarea' } }>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' editable={ { type: 'textarea' } }>Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
