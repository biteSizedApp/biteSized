import React, { Component } from 'react';
import axios from 'axios';

import RestaurantList from './RestaurantList';
import Suggestions from './Suggestions';

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
            cityName: "",
            cityId: '',
            suggestedCities: []
        }
    }

    getInfo = (cityName) => {
        axios({
            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
            method: "GET",
            responseType: "json",
            headers: {
                "user-key": "7cec49712d95851f70de3b8beaf245d9",
            }
        }).then((res) => {
            const northAmericanCities = res.data.location_suggestions.filter((value, index) => {
                if (value.country_id === 37 || value.country_id === 216 ) {
                    return value
                }
            });
            const topSuggestions = northAmericanCities.filter((value, index) => {
                return index <=4
            })
                this.setState({
                    suggestedCities: topSuggestions 
                })
        }).catch((error) => {
            console.log(error)
        })
    }

    getCityId = (e) => {
        e.preventDefault();
        const copyOfSuggestedCities = [...this.state.suggestedCities];
        const suggestedCitiesNames = copyOfSuggestedCities.filter((city) => {
            return this.state.cityName === city.name;
        })
        this.setState({
            cityId: suggestedCitiesNames[0].id
        })

    }


    handleInputChange = () => {
        this.setState({
            cityName: this.search.value
        }, () => {
                if (this.state.cityName) {
                    if (this.state.cityName.length % 2 === 0) {
                        this.getInfo(this.state.cityName)
                }
                } else {

                }
        })
    }

    render() {
        return(
            <div className="NewTrip">
                <RestaurantList cityId={this.state.cityId}/>
                <section>
                    <form action="" onSubmit={this.getCityId}>
                        <h3>new trip</h3>
                        <label htmlFor="tripName">Please enter a name for your trip</label>
                        <input type="text" id="tripName" />
                        <label htmlFor="citySearch">Where are you going?</label>
                        <input
                        autoComplete="off"
                            type="search"
                            id="citySearch"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                        <button>save trip</button>
                    </form>
                </section>
                <Suggestions results={this.state.suggestedCities} />
            </div>
        )
    }
}

export default NewTrip;