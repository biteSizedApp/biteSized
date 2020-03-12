import React, { Component } from 'react';
import SavedRestaurantCard from './SavedRestaurantCard'

class SavedRestaurantList extends Component {
  constructor(props) {
    super()
    this.state = {
      // storing the saved restaurant object
      savedRestaurant: props.savedRestaurants,
    }
  }
  
  removeRestaurantFromList = (restaurantObj) => {
    // if the restaurantobj.name is equal to the item that we're filtering over
    // item.restaurnat.name
    // if this name is not equal to

    const copyOfSavedRestaurant = [...this.state.savedRestaurant];
    const filteredArray = copyOfSavedRestaurant.filter((item) => {
      if (restaurantObj.name !== item.name) {
        return item
      } else {
        return null
      }
    })
    this.setState({
      savedRestaurant: filteredArray
    }, () => {
        this.props.removeRestaurantFromList(this.state.savedRestaurant);
    })
    
  }

  render() {
    return (
      <div>
        {/* Map through results array and passing the results on our saved restaurant card component */}
        <SavedRestaurantCard restaurants={this.state.savedRestaurant} removeRestaurantFromList={this.removeRestaurantFromList}/>
      </div>
    )
  }
}

export default SavedRestaurantList;