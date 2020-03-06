import React, { Component} from 'react';


// get restaurant object from the search
// parse needed information (e.g. name, address) with props
// render the component


() => {}

class SuggestedCard extends Component {
    constructor() {
        super();
        this.state = {
            restaurant: {}
        }
    }

    render() {
        return (
            <div className="Card">
                <img src="" alt=""/>
                <p>Restaurant Name</p>
                <p>Type of cuisine</p>
                <address>
                    <p>123 Sample St</p>
                    <p>City, State</p> 
                    <p>Phone #</p>
                    <a href="#">Website</a>
                </address>
                <p>Price for two: $20</p>
                <p>Rating: 5</p>
                {/* click to add to saved restaurants list. THe icon will change to a checkmark */}
                <button>Add to list</button>
            </div>
        )
    }
}

export default SuggestedCard