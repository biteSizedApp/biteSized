import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import SavedRestaurantList from './SavedRestaurantList.js'
import SuggestedRestaurantCard from './SuggestedRestaurantCard.js';


// the city id from the parent component is passed into axios call as props to retrieve the restaurant list as an array
// filter through the restaurant array by rating (display highest rating first)
// map throughout the filtered array, pass each restaurant object into Card component as props

class SuggestedRestaurantList extends Component {
  constructor(props) {
    super();

    this.state = {
      // storing the list of restaurants from axios call
      results: [],
      // stores the list of saved restaurants that will be saved to the trip 
      savedRestaurants: [],
      cityId: "",
      start: 0,
      isLoading: false
    }
  }

  // OLGA: i'm not getting filtered results if we write axios call in componentDidMount. If i write it in componentDidUpdate i do get the filtered results, but it keeps making the call indefinitely
  getRestaurantList = (isLoading) => {
    this.setState({
      isLoading
    }, () => {
      axios({
        url: `https://developers.zomato.com/api/v2.1/search?entity_id=${this.props.cityId}&entity_type=city&count=10&sort=rating&start=${this.state.start}`,
        method: "GET",
        responseType: "json",
        headers: {
          // "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
          "user-key": "f13ce4f744fbf8bc4b1497187a1d6ad4",
        }
        //  saving the results to state
      }).then((results) => {
        if (this.props.cityId === this.state.cityId) {
          this.setState({
            results: this.state.results.concat(results.data.restaurants),
            cityId: this.props.cityId,
          }, () => {
            this.setState({
              isLoading: false
            })
          })
        } else {
          this.setState({
            results: results.data.restaurants,
            cityId: this.props.cityId,
          }, () => {
            this.setState({
              isLoading: false
            })
          })
        }
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: `${error}`,
          timer: 3000,
        })
      })
    })
  }

  componentWillReceiveProps() {
      this.setState({
        start: 0,
      })
  }

  // takes an individual restaurant object and appends it to savedRestaurants array in the state. This function is passed as props to SuggestedRestaurantCard component and is executed when user clicks the "add to list" button. It also calls a function from parent (NewTrip) that passes the savedRestarants array to it, and saves it in its state (in trip object)
  addRestaurantToList = (e, restaurantObj) => {
    e.preventDefault();

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

  removeRestaurantFromList = (savedRestaurants) => {
    this.setState({
      savedRestaurants: savedRestaurants
    })
  }



  render() {

    return (
      <div className="SuggestedRestaurantList">
        {
        this.props.listToDisplay === 'displaySavedRestos'
        // if the saved restaurant button is clicked, show the SavedRestaurnatList component
        ? <SavedRestaurantList ref="child" savedRestaurants={this.state.savedRestaurants} removeRestaurantFromList={this.removeRestaurantFromList}/>
        : ( this.state.isLoading === true )
        ? <h2>loading restaurants...</h2>
        : this.state.results.map((item) => {
          return (
            // if the find restaurant button is clicked, show this
            <SuggestedRestaurantCard restaurant={item.restaurant} key={item.restaurant.id} addRestaurantToList={this.addRestaurantToList} />
            
        )}
        )}
        {
        this.state.results.length !== 0 && this.props.listToDisplay !== 'displaySavedRestos'
        ? <button onClick={this.displayMore}>Show more</button>
        : null
        }
      </div>
    )
  }
}

export default SuggestedRestaurantList;

