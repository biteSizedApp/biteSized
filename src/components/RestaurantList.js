import React, { Component } from 'react'
import axios from 'axios'
import SuggestedCard from './SuggestedCard';
// import Suggestions from './Suggestions'


// the city id from the parent component is passed into axios call as props to retrieve the restaurant list as an array
// filter through the restaurant array by rating (display highest rating first)

// map throughout the filtered array, pass each restaurant object into Card component as props

class RestaurantList extends Component {
    constructor() {
      super();

      this.state = {
        //   placeholder for city ID. Will be removed.
          query: "89",
        //   storing the list of restaurants fom axios call
          results: []
      }

    }

 componentDidMount() {
     axios({
         url: `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.query}&entity_type=city&count=10&sort=rating `,
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
 render() {
     
     return (
        <div>
            {/* Map through results array and passing the results on our Suggested card component */}
          {this.state.results.map( (item) => {
              return (
                
                <SuggestedCard restaurant={item.restaurant} key={item.restaurant.id}/>
                
              )
          })}
        </div>
     )
 }
        
    
}

export default RestaurantList;

