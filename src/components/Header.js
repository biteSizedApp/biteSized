import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerTitle">
          <img className="icon" src={require("../assets/headerIcon.png")} alt="icon of utensils on a plate" />
            <h1>bite-sized travel</h1>
            <nav>
              <button>Home</button>
              <button>Your Trips</button>
            </nav>
        </div>
        <div className="heroImage">
        </div>
      </header>
    );
  }
}

export default Header;