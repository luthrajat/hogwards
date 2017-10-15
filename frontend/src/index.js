import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About/ProductBanner'

import MyNavbar from './components/MyNavbar/MyNavbar.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/ProductLine/Products.js'
import ProductDetails from './components/Products/ProductDetails/ProductDetails.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Add Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TitleBar from './components/PageLayout/TitleBar.js'
import BottomBar from './components/PageLayout/BottomBar.js';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class MainArea extends Component {
  render() {
    return(
    <div className="bootstrap-main">
      {this.props.children}
    </div>
    )
  }
}

const WebApplication = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <div>
        <TitleBar />
        <MainArea>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            {/* <Route path="/products" component={Products}/> */}
            <Route path="/products/:id" component={Products}/>
            <Route path="/productdetails/:id" component={ProductDetails}/>
            <Route path="*" component={ProductDetails}/>
          </Switch>
        </MainArea>
        <BottomBar />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render( <WebApplication /> , document.getElementById('root'));
