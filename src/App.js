import React, { Component } from "react";

import NewTrip from "./components/NewTrip";
import Nav from "./components/Nav";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";

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
          
          <section>
            <div>
              <button className="tripsHeaders">Find restaurants</button>
              <button className="tripsHeaders">Saved restaurants</button>
            </div>
            <ul>
              {/* restaurant cards will be dynamically added here */}
            </ul>
            <button>Show more</button>
          </section>
          <footer>
            <p>Copyright 2020</p>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
