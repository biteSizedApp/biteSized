import React, { Component } from 'react';
import axios from 'axios';

import RestaurantList from './RestaurantList'

// user types city name in input field,
// axios call is made to retrieve an array of suggested cities that match
// array is stored in the state
// suggestedCities array is displayed on the page 
// to display, we will map through the suggested cities
// the index or id of the array to get the specific object from the array
// users selects a suggestion from the suggestedCities array
// get id from the city object and pass it to the RestaurantList as prop

class NewTrip extends Component {
    constructor() {
        super();
        this.state = {
            trip: {},
            cityID: '',
            suggestedCities: [],
        }
    }

    componentDidMount() {
        axios({
            url: `https://developers.zomato.com/api/v2.1/cities`,
            method: "GET",
            responseType: "json",
            headers: {
                "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
            },
            params: {
                q: 'toronto'
            }
        }).then((res) => {
                this.setState({
                    suggestedCities: res.data.location_suggestions
                })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <RestaurantList />
                <section>
                    <form action="">
                        <h3>new trip</h3>
                        <label htmlFor="tripName">Please enter a name for your trip</label>
                        <input type="text" id="tripName" />
                        <label htmlFor="citySearch">Where are you going?</label>
                        <input type="search" id="citySearch" />
                        <button>save trip</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default NewTrip;