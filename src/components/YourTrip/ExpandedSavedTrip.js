import React, { Component } from 'react';
import firebase from '../../firebase';



class ExpandedSavedTrip extends Component {
  constructor() {
    super();
  
    this.state = {
      noteText: '',
    }
  }


  // WORK IN PROGRESS
  // deleteRestaurant = (e) => {
  //   e.preventDefault();
  // }


  grabNoteValue = (e) => {
    // grab value of the textarea (check if there's anything) and save it to a variable (if there's no value, display an alert)
    const note = e.target.value;
    this.setState({
      noteText: note,
    })
  } 

  // saves a user note to the database to the corresponding restaurant
  saveNote = (e, targetRestaurantName) => {
    // pass restaurant's name as a parameter
    // save the db key for this trip in a variable
    // map over the database to find the object corresponding to this key, and push the note's value to the restaurant in restaurant list
    
    e.preventDefault();
    // get to the node that corresponds to the trip
    const nodeDbRef = firebase.database().ref(`/${this.props.tripProp.key}`)
    let restaurantIndex;

    // get a snapshot of the database node 
    nodeDbRef.once('value', (data => {
      // get to restaurantList in the node
      const restaurants = data.val().restaurantList;

      // find the index of the restaurant in the database
      restaurants.filter((restaurant, index) => {
        if (restaurant.name === targetRestaurantName) {
          restaurantIndex = index;
        }
      })
    }))

    // add the note to firebase
    nodeDbRef.child(`/restaurantList/${restaurantIndex}`).update({userNote: this.state.noteText});

    // reset state
    this.setState({
      userNote: '',
    })
  }

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
                  {restaurant.featuredImg !== ""
                    ? <img src={restaurant.featuredImg} alt={restaurant.name} />
                    : <img src={require('../../assets/placeholder.png')} alt="no image available" />
                  }

                  <p>{restaurant.name}</p>

                  <p>{restaurant.cuisineType}</p>

                  <address>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.phoneNumber}</p>
                  </address>

                  <p>Average cost for two: ${restaurant.avgCostForTwo}</p>
                  
                  <p>{restaurant.rating}</p>

                  {restaurant.userNote 
                    ? <p>{restaurant.userNote}</p>
                    : <form action="SUBMIT">
                        <label htmlFor="restaurantNotes" className="sr-only">Leave a note about your experience.</label>
                        <textarea name="restaurantNotes" id="restaurantNotes" cols="30" rows="10" placeholder="Leave a note about your experience." onChange={this.grabNoteValue}></textarea>
                        <button type="submit" onClick={(e) => {this.saveNote(e, restaurant.name)}}>Add Note</button>
                      </form>
                  }
                  {/* clicking this will delete the restaurant from the database */}
                  <button onClick={this.deleteRestaurant}><i className="fas fa-times" aria-label="close"></i></button>
                </li>
              );
            }) }
          </ul>
        {/* close the modal window on click */}
        <button class="closeButton" onClick={this.props.close}><i className="fas fa-times" aria-label="close"></i></button>  
        
      </div>  
    );
  }
}

export default ExpandedSavedTrip;