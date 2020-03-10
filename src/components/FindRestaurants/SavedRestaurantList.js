import React, { Component } from 'react';
import SavedRestaurantCard from './SavedRestaurantCard'

class SavedRestaurantList extends Component {
  constructor(props) {
    super()
    this.state = {
      // storing the saved restaurant object
      savedRestaurant: []
    }
  }

  componentDidMount() {
    this.setState({
      savedRestaurant: this.props.savedRestaurants
    })
  }

  removeRestaurantFromList = (e, restaurantObj) => {
    // if the restaurantobj.name is equal to the item that we're filtering over
    // item.restaurnat.name
    // if this name is not equal to

    const copyOfSavedRestaurant = this.state.savedRestaurant;
    const filteredArray = copyOfSavedRestaurant.filter((item, index) => {
      if (restaurantObj.name !== item.name) {
        return item
    } 
    })
    this.setState({
      savedRestaurant: filteredArray
    })
  }

  render() {
    return (
      <div>
        {/* Map through results array and passing the results on our saved restaurant card component */}
        {this.state.savedRestaurant.map((item, index) => {
          console.log(item);
          return ( 
            <SavedRestaurantCard restaurant={item} key={index} removeRestaurantFromList={this.removeRestaurantFromList}/>

          )
        })}
      </div>
    )
  }
}

export default SavedRestaurantList;