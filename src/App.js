import React, { Component } from "react";

<<<<<<< HEAD
import NewTrip from "./components/NewTrip";
import Nav from "./components/Nav";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
=======
import NewTrip from './components/NewTrip';
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> testBranch

// import axios from "axios";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main>
          <section>
            <NewTrip />
            <div>
              <h2>About</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero praesentium iusto omnis consectetur, ipsum itaque architecto illum impedit, facere dolorem quos aut saepe velit!</p>
            </div>
          </section>
          <NewTrip />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
