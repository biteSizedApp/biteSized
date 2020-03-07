import React, { Component } from 'react';


// get restaurant object from the search
// parse needed information (e.g. name, address) with props
// render the component


class SuggestedCard extends Component {
    constructor() {
        super();
        this.state = {
            restaurant: {}
        }
    }

    // createRestaurantObject = () => {
    //     this.setState ({
    //         restaurant: {
    //             restaurantName: this.props.name,
    //             cuisineType: this.props.cuisines,
    //             // address: this.props.location.address,
    //             phoneNumber: this.props.phone_number,
    //             avgCostPerPerson: this.props.average_cost_for_two,
    //             // rating: this.props.user_rating.aggregate_rating,
    //         }
    //     })
    // }


    componentDidMount() {
        // this.createRestaurantObject();
        this.setState({
            restaurant: {
                restaurantName: this.props.name,
                cuisineType: this.props.cuisines,
                // address: this.props.location.address,
                phoneNumber: this.props.phone_number,
                avgCostPerPerson: this.props.average_cost_for_two,
                // rating: this.props.user_rating.aggregate_rating,
            }
        })
    }

    render() {
        return (
            <div className="Card">
                <img src="" alt="" />
                <p>{this.state.restaurantName}</p>
                <p>{this.state.cuisineType}</p>
                <address>
                    <p>{this.state.address}</p>
                    <p>{this.state.phoneNumber}</p>
                </address>
                <p>{this.state.avgCostPerPerson}</p>
                <p>{this.state.rating}</p>
                {/* click to add to saved restaurants list. THe icon will change to a checkmark */}
                <button>Add to list</button>
            </div>
        )
    }
}

export default SuggestedCard