import React, {Component} from 'react';
// import {Nav, NavItem, Glyphicon } from 'react-bootstrap';
import logo from "./Images/app-logo.png";

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <img src={logo} alt="AppComer-Logo" height="50%"/>
        <br></br>
        <small className="page-slogan">Find the food you want!</small>
      </div>
    );
  }
}

export default Header;