import React, { Component } from 'react';


// get restaurant object from the search
// parse needed information (e.g. name, address) with props
// render the component


class SuggestedCard extends Component {
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
        console.log('restocard', this.state.restaurant);
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

                {/* click to add to saved restaurants list. THe icon will change to a check mark */}
                <button>Add to list</button>
            </div>
        )
    }
}

export default SuggestedCard