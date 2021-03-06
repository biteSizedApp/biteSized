import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../firebase';
import Swal from 'sweetalert2';

import SuggestedRestaurantList from './SuggestedRestaurantList';
import Suggestions from './Suggestions';




// user types city name in input field,
// axios call is made to retrieve an array of suggested cities that match
// array is stored in the state
// suggestedCities array is displayed on the page 
// to display, we will map through the suggested cities
// the index or id of the array to get the specific object from the array
// users selects a suggestion from the suggestedCities array
// get id from the city object and pass it to the SuggestedRestaurantList as prop

class NewTrip extends Component {
    constructor() {
        super();
        
        this.state = {
            // stores the information about the trip, that will be saved to firebase
            // figure out a prop that will reset this trip object in app and header
            trip: {
                tripName: '',
                city: '',
                restaurantList: [],
            },
            cityName: '',
            tripNickName: "",
            cityId: '',
            suggestedCities: [],
            userSelection: '',
            testState: false,
            listToDisplay: "",
            isLoading: false
        }
    }

    // the axios call which is being triggered as the user is typing in the handleCityInputChange function
    // it takes in the letters being written by the user and displays suggestions

    getInfo = (cityName) => {
        axios({
            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
            method: "GET",
            responseType: "json",
            headers: {
                // "user-key": "7cec49712d95851f70de3b8beaf245d9",
                "user-key": "f13ce4f744fbf8bc4b1497187a1d6ad4",
            }
        }).then((res) => {
            const northAmericanCities = res.data.location_suggestions.filter((value) => {
                if (value.country_id === 37 || value.country_id === 216) {
                    // returns an object for cities that match the typed query AND are located within US or Canada
                    return value
                }
                else {
                    return null
                }
            });
            const topSuggestions = northAmericanCities.filter((value, index) => {
                // shows the first 5 matched cities
                return index <= 4
            })
            if(cityName !== '') {
                this.setState({
                    suggestedCities: topSuggestions
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
            // using an async callback function on the setState method which only executes after the state is set to make sure the correct cityId is passed. the callback function uses refs to call the getRestaurantList function in the SuggestedRestaurantList component which is the axios call
            this.setState({
                cityId: suggestedCitiesNames[0].id,
                isLoading: true
            }, () => {
                this.refs.child.getRestaurantList(this.state.isLoading);
                this.setState({
                    isLoading: false
                })
            })
        } else {
            // should add notification on the page (like sweet alerts)
        }
        document.getElementById("citySearch").focus();
        this.setState({
            suggestedCities: []
        })
    }

    // this function listens for user typing, binds the city name to the user typing and fires the axios call 
    handleCityInputChange = () => {
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
        // copies the object within this.state.trip
        const prevState = this.state.trip;
        // adds city name as another property to the copied trip object
        prevState.city = event.target.value;
        this.setState({
            cityName: event.target.value,
            // assigns the new object with added city name to the state
            trip: prevState,
        })
    }

    handleNameInputChange = (event) => {
        // copies the object within this.state.trip
        const prevState = this.state.trip;
        // adds trip name as another property to the copied trip object
        prevState.tripName = event.target.value;

        this.setState({
            trip: prevState,
            tripNickName: this.text.value
        }
        // , () => console.log(this.state)
        )
    }

    // this function will show the default restaurant list 
    handleFindClick = () => {
        this.setState({
            listToDisplay: 'displayFindRestos'
        });
    }

    // this function will hide the default restaurant list and show the user's saved restaurants
    handleSavedClick = () => {
        this.setState({
            listToDisplay: 'displaySavedRestos'
        })
    }

    // add saved restaurant list from SuggestedRestaurantList component to the trip object in state (called in SuggestedRestaurantCard when user clicks 'add to list' button)
    addRestaurantListToTrip = (restaurantList) => {
        // copies the object within this.state.trip
        const prevState = this.state.trip;
        // adds restaurant list as another property to the copied trip object
        prevState.restaurantList = restaurantList;

        this.setState({
            trip: prevState,
        })
    }

    saveToDb = (e) => {
        e.preventDefault();
        if (
            this.state.trip.city &&
            this.state.trip.tripName &&
            this.state.trip.restaurantList.length > 0
        ) {
            this.setState({
                // reset trip name input
                tripNickName: "",
                // reset city name input
                cityName: ""
            }, () => {
                // reset displayed restaurant list
                this.refs.child.resetRestaurantList();
            })
            Swal.fire({
                title: "Your trip has been saved!",
                icon: "success",
                timer: 2000
            }).then(() => {
                const dbRef = firebase.database().ref();
                dbRef.push(this.state.trip);
                this.setState({
                    trip: {
                        tripName: '',
                        city: '',
                        restaurantList: [],
                    }
                }) 
            });
        } else if (!this.state.trip.tripName) {
            Swal.fire({
                title: "Please enter a name for your trip",
                icon: "error",
                timer: 2000
            });
        } else if (!this.state.trip.city) {
            Swal.fire({
                title: "Please choose a city",
                icon: "error",
                timer: 2000
            });
        } else if (this.state.trip.restaurantList.length === 0) {
            Swal.fire({
                title: "Please choose at least one restaurant to add to your trip.",
                icon: "error",
                timer: 2000
            });
        } 
    }

    render() {
        return (
            <section className="NewTrip">
                    <form action="SUBMIT" onSubmit={this.getCityId}>
                        <h3>new trip</h3>

                        <label htmlFor="citySearch">Where are you going?</label>

                        <div className="cityInput">
                            <input
                                autoComplete="off"
                                type="search"
                                id="citySearch"
                                placeholder="search cities near you"
                                ref={input => this.search = input}
                                onChange={this.handleCityInputChange}
                                value={this.state.cityName}
                            />

                            <Suggestions results={this.state.suggestedCities} getUserChoice={this.getUserChoice} />

                            <button id="citySearchSubmit" className="submitCity">GO</button>
                        </div>

                        <label htmlFor="tripName">Please enter a name for your trip</label>

                        <input
                            id="tripName" 
                            type="text"
                            className="tripName"
                            ref={trip => this.text = trip}
                            placeholder="create a new trip"
                            onChange={this.handleNameInputChange}
                            value={this.state.tripNickName}
                        />

                        <button id="saveTrip" className="saveTripButton" onClick={this.saveToDb}>save trip</button>
                    </form>

                <div className="listContainer">
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
                    
                    <SuggestedRestaurantList cityId={this.state.cityId} listToDisplay={this.state.listToDisplay} ref="child" addRestaurantListToTrip={this.addRestaurantListToTrip} />
                </div>
            </section>
        )
    }
}

export default NewTrip;