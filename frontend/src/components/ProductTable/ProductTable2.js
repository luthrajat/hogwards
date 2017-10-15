import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
// import PropTypes from 'prop-types'; // ES6
import {
  BrowserRouter as Router,
  Route,
  Link,
  Match
} from 'react-router-dom'

export default class ProductTable2 extends React.Component {


  constructor(props) {
      super(props);
      this.match = this.props.match;
      console.log(this.match);
      this.createRows = this.createRows.bind(this);
      this.rowGetter = this.rowGetter.bind(this);

      this.createRows();
      this._columns = [
        { key: 'id', name: 'ID' },
        { key: 'task', name: 'Title' },
        { key: 'priority', name: 'Priority' },
        { key: 'issueType', name: 'Issue Type' },
        { key: 'complete', name: '% Complete' }
      ];
  }

  // getInitialState() {
  //   return null;
  // },

  createRows() {
    let rows = [];
    for (let i = 1; i < 1000000; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: 'a',
        priority: 'b',
        issueType: 'c'
      });
    }

    this._rows = rows;
  }

  rowGetter(i) {
    return this._rows[i];
  }

  onRowSelect(rows) {
    console.log(rows);
    this.setState({ selectedRows: rows });
  }

  render() {
      return(
        <div>
            <ReactDataGrid
              columns={this._columns}
              rowGetter={this.rowGetter}
              rowsCount={this._rows.length}
              onRowSelect={this.onRowSelect}
              enableCellSelect={true}
              minHeight={500} />
        </div>
      )
  }
}
