import React, { Component } from 'react'
import axios from 'axios'
import SuggestedCard from './SuggestedRestaurantCard';
// import Suggestions from './Suggestions'


// the city id from the parent component is passed into axios call as props to retrieve the restaurant list as an array
// filter through the restaurant array by rating (display highest rating first)

// map throughout the filtered array, pass each restaurant object into Card component as props

class RestaurantList extends Component {
  constructor() {
    super();

    this.state = {
      // storing the list of restaurants from axios call
      results: [],
      // stores the list of saved restaurants that will be saved to the trip 
      savedRestaurants: [],
      cityId: "",
    }
  }

  // OLGA: i'm not getting filtered results if we write axios call in componentDidMount. If i write it in componentDidUpdate i do get the filtered results, but it keeps making the call indefinitely
  getRestaurantList = (cityId) => {
    axios({
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=10&sort=rating `,
      // url: `https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&count=10&sort=rating `, //test
      method: "GET",
      responseType: "json",
      headers: {
        "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
      }
      //  saving the results to state
    }).then((results) => {
      this.setState({
        results: results.data.restaurants
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  // takes an individual restaurant object and appends it to savedRestaurants array in the state. This function is passed as props to SuggestedRestaurantCard component and is executed when user clicks the "add to list" button
  addRestaurantToList = (e, restaurantObj) => {
    e.preventDefault();

    // 
    this.setState(prevState => {
      return {
        savedRestaurants: [...prevState.savedRestaurants, restaurantObj]
      }
    })
  }


  render() {
    return (
      <div>
        {/* Map through results array and passing the results on our Suggested card component */}
        {this.state.results.map((item) => {
          return (

            <SuggestedCard restaurant={item.restaurant} key={item.restaurant.id} addRestaurantToList={this.addRestaurantToList} />

          )
        })}
      </div>
    )
  }
}

export default RestaurantList;

