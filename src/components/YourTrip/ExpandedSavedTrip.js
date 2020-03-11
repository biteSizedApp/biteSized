import React, { Component } from 'react';



class ExpandedSavedTrip extends Component {
  

  render() {
    const tripObj = this.props.tripProp.trip;

    return (
       <div className="expandedSavedTrip">
         <h3>{this.props.tripProp.trip.tripName}</h3>
         <h4>{this.props.tripProp.trip.city}</h4>
         <div className="restListContainer">
          <ul>
            {tripObj.restaurantList.map((restaurant, i) => {
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
                    </div>
                    <p>
                      <span className="rating">{restaurant.rating}</span>
                    </p>
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
        <button onClick={this.props.close}><i className="fas fa-times" aria-label="close"></i></button>  
        
       </div>  
       </div>   
    );
  }
}

export default ExpandedSavedTrip;