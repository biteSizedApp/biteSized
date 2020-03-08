import React, { Component } from "react";
import firebase from './firebase.js';

import NewTrip from "./components/NewTrip";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurantList from "./components/RestaurantList";

// import axios from "axios";

class App extends Component {
  constructor() {
    super()

    this.state = {
      restaurantList: [],
      suggestedList: [],
      savedList: [],
      restaurantName: '',
      cuisine: '',
      address: '',
      phone: '',
      website: '',
      price: '',
      rating: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main>
          <section>
            <div className="wrapper">
              <div className="aboutSection">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero praesentium iusto omnis consectetur, ipsum itaque architecto illum impedit, facere dolorem quos aut saepe velit!</p>
              </div>
            <NewTrip />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
