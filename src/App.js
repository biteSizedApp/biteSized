import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header';
import NewTrip from './components/findRestaurants/NewTrip';
import YourTrips from './components/yourTrip/YourTrips';
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
              <Route path="/" exact component={NewTrip} />
              <Route path="/yourTrips" exact component={YourTrips} />
            </div>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;