import React, { Component} from 'react';


// get restaurant object from the search
// parse needed information (e.g. name, address) with props
// render the component

// this empty function was left as such and was causing errors so i commented it out but didnt delete it in case someone wanted to add something to it
// () => {}

class SuggestedCard extends Component {
    constructor() {
        super();
        this.state = {
            restaurant: {}
        }
    }

    createNewRestaurantList = () => {
        this.setState({
            restaurantName: this.props.name,
            restaurantCuisine: this.props.cuisines,
            restaurantAddress: this.props.location.address,
            restaurantNumber: this.props.phone_number,
            restaurantAvgPrice: this.props.average_cost_for_two,
            restaurantRating: this.props.user_rating.aggregate_rating,

        })
    }

    render() {
        return (
            <div className="Card">
                <img src="" alt=""/>
                    <p>{this.state.restaurantName}</p>
                    <p>{this.state.restaurantCuisine}</p>
                <address>
                    <p>{this.state.restaurantAddress}</p> 
                    <p>{this.state.restaurantNumber}</p>
                </address>
                <p>{this.state.restaurantAvgPrice}</p>
                <p>{this.state.restaurantRating}</p>
                {/* click to add to saved restaurants list. THe icon will change to a checkmark */}
                <button>Add to list</button>
            </div>
        )
    }
}

export default SuggestedCard