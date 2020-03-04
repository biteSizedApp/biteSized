import React, { Component } from 'react';
import './App.css';

import axios from "axios";
// import Qs from "qs";






class App extends Component {
  constructor() {
    super();
    this.state = {
      hassanKey: "cff8655f9125581c7db4a5e95cd60d6f",
      olgaKey: "7cec49712d95851f70de3b8beaf245d9"
    }  
  }

  // use /search/location_id endpoint to search for restaurants in this city/town/country


  zomatoApiCall = () => {
    axios({
      url: "https://developers.zomato.com/api/v2.1/search?entity_id=89&q=italian",
      method: "GET",
      responseType: "jsonp",
      headers: {
        "user-key": this.state.hassanKey,
      }
    }).then((result) => {
      // console.log(result.data.restaurants);
      console.log(result.data.restaurants[0].restaurant);

      // name
      console.log("Name: ", result.data.restaurants[0].restaurant.name);
      // address
      console.log("address: ", result.data.restaurants[0].restaurant.location.address);
      // rating
      console.log("Rating: ", result.data.restaurants[0].restaurant.user_rating.aggregate_rating);
      // price range
      console.log("Price Range: ", result.data.restaurants[0].restaurant.price_range);
      // cuisine
      console.log("Cuisine: ", result.data.restaurants[0].restaurant.cuisines);
      // image
      console.log("Image url: ", result.data.restaurants[0].restaurant.photos_url);
      // menu
      console.log("Menu url: ", result.data.restaurants[0].restaurant.menu_url);
      // timings
      console.log("Timings: ", result.data.restaurants[0].restaurant.timings);
    })
  }


  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <button onClick={this.zomatoApiCall}>call API</button>
      </div>
    );
  }
}

export default App;
