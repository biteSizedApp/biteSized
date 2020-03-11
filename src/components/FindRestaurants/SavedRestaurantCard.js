import React, { Component } from 'react';

class SavedRestaurantCard extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurant: {
        name: props.restaurant.name,
        cuisineType: props.restaurant.cuisineType,
        address: props.restaurant.address,
        phoneNumber: props.restaurant.phoneNumber,
        avgCostForTwo: props.restaurant.avgCostForTwo,
        rating: props.restaurant.rating,
        featuredImg: props.restaurant.featuredImg,
      }
    }
  }

  render() {
    return (
      <div className="cardSection">
        <div className="card">
          {/* click to add to saved restaurants listThe icon will change to a check mark */}
          <button id="closeCard" onClick={(e) => { this.props.removeRestaurantFromList(e, this.state.restaurant) }}><i id="close" className="fas fa-times"></i></button>
          {this.state.restaurant.featuredImg !== ""
          ? <img src={this.state.restaurant.featuredImg} alt={this.state.restaurant.name} />
          : <img src={require('../../assets/placeholder.png')} alt="no image available" />}
          <p><span className="restaurantTitle restaurantName">{this.state.restaurant.name}</span> - {this.state.restaurant.cuisineType}</p>
          <address>
            <p>{this.state.restaurant.address}</p>
            <p>{this.state.restaurant.phoneNumber}</p>
          </address>
          <p>Average cost for two: ${this.state.restaurant.avgCostForTwo}</p>
          <p><span className="rating">{this.state.restaurant.rating}</span></p>
        </div>
      </div>
    )
  }
}

export default SavedRestaurantCard;