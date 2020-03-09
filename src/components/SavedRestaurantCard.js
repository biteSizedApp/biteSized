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
        <img src="" alt=""></img>
        <p>""</p>
        <p>""</p>
        <address>
          <p>""</p>
          <p>""</p>
        </address>
        <p>Average cost for two: $ ""</p>
        <p>""</p>
        {/* click to add to saved restaurants list. The icon will change to a check mark */}
        <button><i className="fas fa-times" aria-hidden></i></button>
      </div>
    )
  }
}

export default SavedRestaurantCard