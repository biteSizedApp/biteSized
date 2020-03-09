import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <header>
          <nav>
            <button>Home</button>
            <button>Your Trips</button>
          </nav>
        <h1 className="title">bite-sized travel</h1>
        <div className="heroImage"></div>
      </header>
    );
  }
}

export default Header;