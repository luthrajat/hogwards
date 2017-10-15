import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconEmail  from 'material-ui/svg-icons/communication/contact-mail';
import IconPhone  from 'material-ui/svg-icons/communication/contact-phone';
import './BottomBar.css';

const nearbyIcon = <IconLocationOn />;
const emailIcon = <IconEmail />;
const phoneIcon = <IconPhone />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
export default class BottomBar extends React.Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper className="footer" zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Email"
            icon={emailIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Phone"
            icon={phoneIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
