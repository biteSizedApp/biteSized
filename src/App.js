import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header';
import About from './components/About';
import NewTrip from './components/findRestaurants/NewTrip';
import YourTrips from './components/yourTrip/YourTrips';
import ExpandedSavedTrip from './components/yourTrip/ExpandedSavedTrip';
import Footer from './components/Footer';

// import axios from "axios";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <main>
            {/* <About /> */}
            <Route path="/" exact component={NewTrip} />
            <Route path="/yourTrips" exact component={YourTrips} />
            {/* <Route path="/trip" component={ExpandedSavedTrip} /> */}
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
