import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'


// the city id from the parent component is passed into axios call as props to retrieve the restaurant list as an array
// filter through the restaurant array by rating (display highest rating first)
// map throught the filtered array, pass each restaurant object into Card component as props

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            results: []
        }
    }

    componentDidMount() {
        axios({
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=89&count=10 `,
            method: "GET",
            responseType: "json",
            headers: {
                "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
            }
        }).then(( res ) => {
            console.log(res.data);
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.results} />
            </form>
        )
    }
}

export default RestaurantList