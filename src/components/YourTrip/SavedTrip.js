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

  componentDidMount() {
    console.log(this.props.tripProp.trip.restaurantList);
  }

  render() {
    return (
      <div className="savedTripCard">

        <h4>{this.props.tripProp.trip.tripName}</h4>
        <h5>{this.props.tripProp.trip.city}</h5>

        <button className='deleteButton' aria-label="delete card" onClick={this.deleteCard}>
          <i className="fas fa-times" aria-label="hidden"></i>
        </button>

        <ul>
          {/* map through saved restaurant list here */}
          {this.props.tripProp.trip.restaurantList.map((restaurant) => {
            return (
              <li>{restaurant.name}</li>
            )
          })}
        </ul>

        <button className="expandCardButton">Expand</button>

      </div>
    );
  }
}

export default SavedTrip;