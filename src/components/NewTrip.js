import React, { Component } from 'react';
import axios from 'axios';

import RestaurantList from './RestaurantList';
import SavedRestaurantCard from './SavedRestaurantCard';
import Suggestions from './Suggestions';
// import Autosuggest from 'react-autosuggest';

// user types city name in input field,
// axios call is made to retrieve an array of suggested cities that match
// array is stored in the state
// suggestedCities array is displayed on the page 
// to display, we will map through the suggested cities
// the index or id of the array to get the specific object from the array
// users selects a suggestion from the suggestedCities array
// get id from the city object and pass it to the RestaurantList as prop

class NewTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {},
            cityName: "",
            cityId: "",
            suggestedCities: [],
            userSelection: "",
            listToDisplay: '',
            // 
        }
    }

    // the axios call which is being triggered as the user is typing in the handleInputChange function
    // it takes in the letters being written by the user and displays suggestions

    getInfo = (cityName) => {
        axios({
            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
            method: "GET",
            responseType: "json",
            headers: {
                "user-key": "7cec49712d95851f70de3b8beaf245d9",
            }
        }).then((res) => {
            const northAmericanCities = res.data.location_suggestions.filter((value) => {
                if (value.country_id === 37 || value.country_id === 216) {
                    // returns an object for cities that match the typed query AND are located within US or Canada
                    return value
                }
            });
            const topSuggestions = northAmericanCities.filter((value, index) => {
                // shows the first 5 matched cities
                return index <= 4
            })
            this.setState({
                suggestedCities: topSuggestions
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    // this function takes in the city name submitted by the user and sets the city ID  in component state accordingly
    getCityId = (e) => {
        e.preventDefault();
        // checks if the input is empty
        if (this.state.cityName.trim() !== "" && this.state.cityName.trim() !== "none") {
            const copyOfSuggestedCities = [...this.state.suggestedCities];
            const suggestedCitiesNames = copyOfSuggestedCities.filter((city) => {
                return this.state.cityName === city.name;
            })
            this.setState({
                cityId: suggestedCitiesNames[0].id
            })
        } else {
            // should add notification on the page (like sweet alerts)
            console.log("please choose a city first");
        }
        document.getElementById("citySearch").focus();
        this.setState({
            cityName: ""
        })
    }

    // this function listens for user typing, binds the city name to the user typing and fires the axios call 
    handleInputChange = () => {
        this.setState({
            cityName: this.search.value
        }, () => {
            if (this.state.cityName) {
                if (this.state.cityName.length % 2 === 0) {
                    this.getInfo(this.state.cityName)
                }
            }
        })
    }

    // this function binds the city name to the select change 
    getUserChoice = (event) => {
        this.setState({
            cityName: event.target.value,
        })
    }

    // this function will show the default restaurant list 
    handleFindClick = () =>{
        this.setState ({
            listToDisplay: 'displayFindRestos'
        });
    }


    // this function will hide the default restaurant list and show the user's saved restaurants
    handleSavedClick = () => {
        this.setState ({
            listToDisplay: 'displaySavedRestos'
        })
    }


    render() {
        let componentToDisplay;
        const listToDisplay = this.state.listToDisplay;
        // conditional that renders the proper component depending on user's click
        if (listToDisplay === 'displaySavedRestos') {
            componentToDisplay = <SavedRestaurantCard />
        } else if (listToDisplay === 'displayFindRestos') {
            componentToDisplay = <RestaurantList cityId={this.state.cityId}/>
        }

        return (
            <section className="NewTrip">
                <Suggestions results={this.state.suggestedCities} getUserChoice={this.getUserChoice} />
                <form action="SUBMIT" onSubmit={this.getCityId}>
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
                        value={this.state.cityName}
                    />
                    <button>save trip</button>
                </form>
                <button
                    className="tripsHeaders"
                    value="findRestaurants"
                    onClick={this.handleFindClick}>
                    Find restaurants
                </button>
                <button
                    className="tripsHeaders"
                    value="savedRestaurants"
                    onClick={this.handleSavedClick}>
                    Saved restaurants
                </button>
                {componentToDisplay}
                <button>Show more</button>
            </section>
        )
    }
}

export default NewTrip;