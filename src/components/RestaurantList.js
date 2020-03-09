import React, { Component } from 'react'
import axios from 'axios'
import SuggestedRestaurantCard from './SuggestedRestaurantCard';
import SavedRestaurantList from './SavedRestaurantList';


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
    }
  }

  // OLGA: i'm not getting filtered results if we write axios call in componentDidMount. If i write it in componentDidUpdate i do get the filtered results, but it keeps making the call indefinitely
  componentDidMount() {
    axios({
        //  url: `https://developers.zomato.com/api/v2.1/search?entity_id=${this.props.cityId}&entity_type=city&count=10&sort=rating `,
         url: `https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&count=10&sort=rating `, //test
        method: "GET",
        responseType: "json",
        headers: {
            "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
        }
        //  saving the results to state
        }).then(( results ) => {
            this.setState({
                results: results.data.restaurants
            })
        }).catch((error) => {
            console.log(error)
        })
  }


  addRestaurantToList = (e, restaurantObj) => {
    e.preventDefault();
    console.log('saved restaurant: ', restaurantObj);

  // have to figure out how to append to the list in state
  this.setState(prevState => {
    return {
      savedRestaurants: [...prevState.savedRestaurants, restaurantObj]
    }
  }, () => console.log(this.state.savedRestaurants))
}

  render() {
    return (
        <div>
            {/* Map through results array and passing the results on our Suggested card component */}
          {this.state.results.map( (item) => {
              return (
                // if the find restaurant button is clicked, show this
                this.props.listToDisplay === 'displaySavedRestos'
                  ? <SavedRestaurantList restaurant={item.restaurant} key={item.restaurant.id} />
                  : <SuggestedRestaurantCard restaurant={item.restaurant} key={item.restaurant.id} addRestaurantToList={this.addRestaurantToList} />
                // if the saved restaurant button is clicked, show the SavedRestaurnatList component
              )
          })}
        </div>
    )
  }
}

export default RestaurantList;

