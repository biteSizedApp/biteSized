import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="yourTrips" exact>Your Trips</NavLink>   
        </nav>
        <h1>bite-sized travel</h1>
      </header>
    );
  }
}

export default Header;