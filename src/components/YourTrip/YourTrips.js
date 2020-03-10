import React, { Component } from 'react';
import firebase from '../../firebase';

import SavedTrip from './SavedTrip';

// fetch all saved trips objects from firebase and store them in an array in state
// map through the trips array, feed the info to individual trip card via props
// display cards 

class YourTrips extends Component {
  constructor() {
    super();
  
    this.state = {
      savedTrips: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {

      const dbData = data.val();
      const dbSavedTrips = [];

      for (let key in dbData) {
        const objToPush = {
          key: key,
          trip: dbData[key],
        }

        dbSavedTrips.push(objToPush);
      }

      this.setState({
        savedTrips: dbSavedTrips,
      }); 
    })
  }


  render() {

    return (
      <main>
        {/* is this an h3 ?*/}
        <h3>Your Trips</h3>
        {/* holds all the saved trips cards */}
        <ul className="yourTripsGrid">

          {/* pass each restaurant object as props */}
          {
            this.state.savedTrips.map((item) => {
              return (
                <SavedTrip tripProp={item} key={item.key} />
              )
            })
          }
          

        </ul>

      </main>
    );
  }
}

export default YourTrips;