import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header';
import About from './components/About';
<<<<<<< HEAD
import NewTrip from './components/FindRestaurants/NewTrip';
=======
import NewTrip from './components/findRestaurants/NewTrip';
>>>>>>> a100347b39985770cab0e6a99252434d82a20e2c
import YourTrips from './components/YourTrip/YourTrips';
import Footer from './components/Footer';

// import axios from "axios";

class App extends Component {

  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Header />

          <main>
            {/* <About /> */}
            <Route path="/" exact component={NewTrip} />
            <Route path="/yourTrips" exact component={YourTrips} />
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;