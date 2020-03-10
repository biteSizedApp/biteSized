import React, { Component } from 'react';
import firebase from '../../firebase';



class SavedTrip extends Component {

  // delete the card from firebase when user clicks delete button
  deleteCard = (e, tripKey) => {
    e.preventDefault();

    const dbRef = firebase.database().ref();

    // find a child in the database with the given key and remove it
    dbRef.child(tripKey).remove();
  }


  // will take user to individual trip page
  expandCard = () => {
    console.log('card expanded');
  }


  // componentDidMount() {
  //   console.log(this.props.tripProp.trip.restaurantList);
  // }


  render() {
    return (
      <div className="savedTripCard">

        <h4>{this.props.tripProp.trip.tripName}</h4>
        <h5>{this.props.tripProp.trip.city}</h5>

        <button className='deleteButton' aria-label="delete card" onClick={(e) => {this.deleteCard(e, this.props.tripProp.key)}}>
          <i className="fas fa-times" aria-label="hidden"></i>
        </button>

        <ul>
          {/* map through saved restaurant list here */}
          {this.props.tripProp.trip.restaurantList.map((restaurant, index) => {
            return (
              <li key={index}>{restaurant.name}</li>
            )
          })}
        </ul>

        <button className="expandCardButton" onClick={this.expandCard}>Expand</button>

      </div>
    );
  }
}

export default SavedTrip;