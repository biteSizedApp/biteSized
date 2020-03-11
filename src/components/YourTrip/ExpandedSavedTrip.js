import React, { Component } from 'react';



class ExpandedSavedTrip extends Component {
  render() {
    return (
       <div className="expandedSavedTrip">
         <h3>{this.props.tripProp.trip.tripName}</h3>
         <h4>{this.props.tripProp.trip.city}</h4>
         <div className="restListContainer">
          <ul>
            {this.props.tripProp.trip.restaurantList.map((restaurant, i) => {
              return (
                <li>
                  <div className="cardContainer">
                    <img
                      src={restaurant.featuredImg}
                      alt={restaurant.name}
                    ></img>
                    <div className="cardContent">
                      <p>{restaurant.name}</p>
                      <p>{restaurant.cuisineType}</p>
                      <address>
                        <p>{restaurant.address}</p>
                        <p>{restaurant.phoneNumber}</p>
                      </address>
                      <p>Average cost for two: ${restaurant.avgCostForTwo}</p>
                      <span>
                        <p>{restaurant.rating}</p>
                      </span>
                    </div>
                  </div>
                  <div className="formContainer">
                    <form action="">
                      <label htmlFor="restaurantNotes"></label>
                      <textarea
                        name="restaurantNotes"
                        id="restaurantNotes"
                        cols="30"
                        rows="5"
                      >
                        Leave a note about your experience.
                      </textarea>
                      <button type="submit">Add Note</button>
                    </form>

                  </div>
                </li>
              );
            }) }
          </ul>
         </div>

        
       </div>     
    );
  }
}

export default ExpandedSavedTrip;