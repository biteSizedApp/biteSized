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

  render() {
    return (
      <div>
        {/* Map through results array and passing the results on our saved restaurant card component */}
        {this.state.savedRestaurant.map((item, index) => {
          console.log(item);
          return ( 
            <SavedRestaurantCard restaurant={item} key={index} />


          )
        })}
      </div>
    )
  }
}

export default SavedRestaurantList;