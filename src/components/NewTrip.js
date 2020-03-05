import React from 'react';
import axios from 'axios';

class NewTrip extends Component {
    constructor() {
        super();
        this.state = {
            trip: {},
            cityID: '',
        }
    }

    componentDidMount() {
        axios({
            url: `https://developers.zomato.com/api/v2.1/cities`,
            method: "GET",
            responseType: "json",
            headers: {
                "user-key": "cff8655f9125581c7db4a5e95cd60d6f",
                q: this.state.city,
            }
        }).then((res) => {
                console.log(res.data);
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