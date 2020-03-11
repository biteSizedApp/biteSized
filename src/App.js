import React, { Component } from 'react';
import './App.css';

import NewTrip from './components/findRestaurants/NewTrip';
import YourTrips from './components/yourTrip/YourTrips';
import Header from './components/Header';
import Footer from './components/Footer';

// import axios from "axios";

class App extends Component {


  render() {
    return (
      <div className="main">
        <Header />
          <div className="wrapper">
            <section className="about">
              <div>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero praesentium iusto omnis consectetur, ipsum itaque architecto illum impedit, facere dolorem quos aut saepe velit!</p>
              </div>
            </section>
          </div>
          <div className="container">
          <YourTrips />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;