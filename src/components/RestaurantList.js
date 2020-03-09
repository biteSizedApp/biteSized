import React, { Component } from 'react'
import axios from 'axios'
import SuggestedRestaurantCard from './SuggestedRestaurantCard';
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
      start: 0
    }
  }

  // OLGA: i'm not getting filtered results if we write axios call in componentDidMount. If i write it in componentDidUpdate i do get the filtered results, but it keeps making the call indefinitely
  getRestaurantList = (cityId) => {
    axios({
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=10&sort=rating&start=${this.state.start}`,
      // url: `https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&count=10&sort=rating `, //test
      method: "GET",
      responseType: "json",
      headers: {
        "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
      }
      //  saving the results to state
    }).then((results) => {
      if(cityId === this.state.cityId) {
        this.setState({
          results: this.state.results.concat(results.data.restaurants),
          cityId,
        })
      } else {
        this.setState({
          results: results.data.restaurants,
          cityId,
        })
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  // takes an individual restaurant object and appends it to savedRestaurants array in the state. This function is passed as props to SuggestedRestaurantCard component and is executed when user clicks the "add to list" button. It also calls a function from parent (NewTrip) that passes the savedRestarants array to it, and saves it in its state (in trip object)
  addRestaurantToList = (e, restaurantObj) => {
    e.preventDefault();

    // 
    this.setState(prevState => {
      return {
        savedRestaurants: [...prevState.savedRestaurants, restaurantObj]
      }
    }, () => {
      //  callback from NewTrip.js
      this.props.addRestaurantListToTrip(this.state.savedRestaurants);
    })
  }

  displayMore = () => {
    this.setState({
      // count: this.state.count + 10,
      start: this.state.start + 10
    }, () => {
      this.getRestaurantList(this.state.cityId);
    })
  }



  render() {
    return (
      <div className="RestaurantList">
        {/* Map through results array and passing the results on our Suggested card component */}
        {this.state.results.map((item) => {
          return (

            <SuggestedRestaurantCard restaurant={item.restaurant} key={item.restaurant.id} addRestaurantToList={this.addRestaurantToList} />

          )
        })}
        {/* displays more results on click */}
        {
        this.state.results.length !== 0
        ? <button onClick={this.displayMore}>Show more</button>
        : null
        }
        
      </div>
    )
  }
}

export default RestaurantList;

