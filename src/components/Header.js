<<<<<<< HEAD
import React from "react";

const Header = () => {
  return (
    <header className="heroImage">
    </header>
  )
=======
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
>>>>>>> testBranch
}

export default Header;