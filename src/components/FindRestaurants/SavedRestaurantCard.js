import React, { Component } from 'react';

class SavedRestaurantCard extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurant: {
        name: this.props.restaurant.name,
        cuisineType: this.props.restaurant.cuisines,
        address: this.props.restaurant.location.address,
        phoneNumber: this.props.restaurant.phone_numbers,
        avgCostForTwo: this.props.restaurant.average_cost_for_two,
        rating: this.props.restaurant.user_rating.aggregate_rating,
        featuredImg: this.props.restaurant.featured_image,
      }
    }
  }

  render() {
    return (
      <div className="card">
        <img src={this.state.restaurant.featuredImg} alt={this.state.restaurant.name}></img>
        <p>{this.state.restaurant.name}</p>
        <p>{this.state.restaurant.cuisineType}</p>
        <address>
          <p>{this.state.restaurant.address}</p>
          <p>{this.state.restaurant.phoneNumber}</p>
        </address>
        <p>Average cost for two: ${this.state.restaurant.avgCostForTwo}</p>
        <p>{this.state.restaurant.rating}</p>

        {/* click to add to saved restaurants listThe icon will change to a check mark */}
        <button onClick={(e) => { this.props.removeRestaurantToList(e, this.state.restaurant) }}><i className="fas fa-plus" aria-hidden></i>remove</button>
      </div>
    )
  }
}

export default SavedRestaurantCard;