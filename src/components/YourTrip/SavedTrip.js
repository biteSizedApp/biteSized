import React, { Component } from 'react';
import firebase from '../../firebase';
import Swal from 'sweetalert2';

import ExpandedSavedTrip from './ExpandedSavedTrip';



class SavedTrip extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false
    }
  }

  expandModal = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    })
  }

  // delete the card from firebase when user clicks delete button
  deleteCard = (e, tripKey) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    
    Swal.fire({
      title: 'Are you sure you want to delete your trip?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then(() => {
          // find a child in the database with the given key and remove it
          dbRef.child(tripKey).remove();
        })
      }
    })    
  }

  render() {
    return (
      <div className="savedTripCard">

        <h4>{this.props.tripProp.trip.tripName}</h4>
        <h5>{this.props.tripProp.trip.city}</h5>

        <button className='deleteButton' aria-label="delete card" onClick={(e) => {this.deleteCard(e, this.props.tripProp.key)}}>
          <i className="fas fa-times" aria-hidden></i>
        </button>

        <ul>
          {this.props.tripProp.trip.restaurantList.map((restaurant, index) => {
            return (
              <li key={index}>{restaurant.name}</li>
            )
          })}
        </ul>

        {/* modal window with trip info is open when user clicks this button */}
        <button className="expand" onClick={this.expandModal}>Expand</button>

        {this.state.showDetails ? <ExpandedSavedTrip tripProp={this.props.tripProp} close={this.expandModal}/> : null}
      </div>
    );
  }
}

export default SavedTrip;