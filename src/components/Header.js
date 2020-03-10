import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <button>Home</button>
          <button>Your Trips</button>
        </nav>
        <h1>bite-sized travel</h1>
      </header>
    );
  }
}

export default Header;