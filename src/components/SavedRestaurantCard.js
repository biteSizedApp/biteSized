import React, { Component } from 'react';

class SavedRestaurantCard extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {}
    }
  }

  render() {
    return (
      <div className="Card">
        <img src="" alt="" />
        <p>Restaurant Name</p>
        <p>Type of cuisine</p>
        <address>
          <p>123 Sample St</p>
          <p>City, State</p>
          <p>Phone #</p>
          <a href="#">Website</a>
        </address>
        <p>Price for two: $20</p>
        <p>Rating: 5</p>
        {/* click to add to saved restaurants list. The icon will change to a check mark */}
        <button>Remove from list</button>
      </div>
    )
  }
}

export default SavedRestaurantCard