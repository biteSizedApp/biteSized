import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header';
import About from './components/About';
import NewTrip from './components/findRestaurants/NewTrip';
<<<<<<< HEAD
import YourTrips from './components/YourTrip/YourTrips';
=======
import YourTrips from './components/yourTrip/YourTrips';
>>>>>>> henry/yourTripStyling
import Footer from './components/Footer';

// import axios from "axios";

class App extends Component {

  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Header />
            
          <main>
            <div className="wrapper">
            {/* <About /> */}
            <Route path="/" exact component={NewTrip} />
            <Route path="/yourTrips" exact component={YourTrips} />
<<<<<<< HEAD
=======
            </div>
>>>>>>> henry/yourTripStyling
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;