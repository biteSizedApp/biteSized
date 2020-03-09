import React, { Component } from 'react';



class SavedTrip extends Component {
  // delete the card when user clicks delete button
  deleteCard = () => {
    console.log('card deleted');
    // have to remove it from firebase
  }

  // will take user to individual trip page
  expandCard = () => {
    console.log('card expanded');
  }


  render() {
    return (
      <div className="savedTripCard">

        <h4>Trip Name</h4>
        <h5>Location</h5>

        <button className='deleteButton' aria-label="delete card" onClick={this.deleteCard}>
          <i class="fas fa-times"></i>
        </button>

        <ul>
          {/* map through saved restaurant list here */}
        </ul>

        <button className="expandCardButton">Expand</button>

      </div>
    );
  }
}

export default SavedTrip;