import React, { Component } from 'react';



class ExpandedSavedTrip extends Component {
  

  render() {
    const tripObj = this.props.tripProp.trip;

    return (
       <div className="expandedSavedTrip">
         <h3>{tripObj.tripName}</h3>
         <h4>{tripObj.city}</h4>

          <ul>
            {tripObj.restaurantList.map((restaurant, i) => {
              return (
                <li>                
                  <img src={restaurant.featuredImg} alt={restaurant.name}></img>
                  <p>{restaurant.name}</p>
                  <p>{restaurant.cuisineType}</p>
                  <address>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.phoneNumber}</p>
                  </address>
                  <p>Average cost for two: ${restaurant.avgCostForTwo}</p>
                  <p>{restaurant.rating}</p>
                  <form action="">
                    <label htmlFor="restaurantNotes"></label>
                    <textarea name="restaurantNotes" id="restaurantNotes" cols="30" rows="10">
                      Leave a note about your experience.
                    </textarea>
                    <button type="submit">Add Note</button>
                  </form>
                </li>

              )
            }) }
          </ul>
        <button onClick={this.props.close}><i className="fas fa-times" aria-label="close"></i></button>  
        
       </div>     
    );
  }
}

export default ExpandedSavedTrip;