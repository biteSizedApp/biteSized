import React, { Component } from 'react';
import SavedRestaurantCard from './SavedRestaurantCard'

class SavedRestaurantList extends Component {
  constructor() {
    super()
    this.state = {
      // storing the saved restaurant object
      savedRestaurant: []
    }
  }

  render() {
    return (
      <div>
        {/* Map through results array and passing the results on our saved restaurant card component */}
        {this.state.savedRestaurant.map((item) => {
          return (

            <SavedRestaurantCard restaurant={item.restaurant} key={item.restaurant.id} />


          )
        })}
      </div>
    )
  }
}

export default SavedRestaurantList;