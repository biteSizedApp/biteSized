import React, { Component } from 'react';

import SavedTrip from './SavedTrip';

// fetch all saved trips objects from firebase and store them in an array in state
// map through the trips array, feed the info to individual trip card via props
// display cards 

class YourTrips extends Component {
  constructor() {
    super();
  
    this.state = {
      savedTrips = [],
    }
  }


  render() {
    return (
      <main>
        {/* is this an h3 ?*/}
        <h3>Your Trips</h3>
        {/* holds all the saved trips cards */}
        <div className="yourTripsGrid">

          {/* pass each restaurant object as props */}
          {this.state.savedTrips.map((trip) => {
            <SavedTrip tripObject={trip}/>
          })}

        </div>

      </main>
    );
  }
}

export default YourTrips;