import React, { Component } from 'react';


// get restaurant object from the search
// parse needed information (e.g. name, address) with props
// create a new, smaller restaurant object that can be save to the trip
// render the component
// when "add to list" button is clicked, pass the restaurant object from the state to the RestaurantList component, where it will be stored in an array


class SuggestedRestaurantCard extends Component {
    constructor(props) {
        super();
        this.state = {
            restaurant: {
                name: props.restaurant.name,
                cuisineType: props.restaurant.cuisines,
                address: props.restaurant.location.address,
                phoneNumber: props.restaurant.phone_numbers,
                avgCostForTwo: props.restaurant.average_cost_for_two,
                rating: props.restaurant.user_rating.aggregate_rating,
                featuredImg: props.restaurant.featured_image,
            }
        }
    }

    render() {
        return (
            <div className="cardSection">
                <div className="card">
                    <button className="addToList" onClick={(e) => { this.props.addRestaurantToList(e, this.state.restaurant) }}><i className="fas fa-plus" aria-hidden></i> add to list</button>

                    <img src={this.state.restaurant.featuredImg} alt={this.state.restaurant.name}></img>

                    <p className="restaurantTitle"><span className="restaurantName">{this.state.restaurant.name}</span> - {this.state.restaurant.cuisineType}</p>
                    <address>
                        <p>{this.state.restaurant.address}</p>
                        <p>{this.state.restaurant.phoneNumber}</p>
                    </address>
                    <p>Average cost for two: ${this.state.restaurant.avgCostForTwo}</p>
                    <p className="rating">{this.state.restaurant.rating}</p>
                </div>
            </div>
        )
    }
}

export default SuggestedRestaurantCard;