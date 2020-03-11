import React from 'react'


// function component that takes in an array of suggested cities as props and triggers the getUserChoice function in NewTrip component to bind the city name with the select change 
const Suggestions = (props) => {
    const options = props.results.map(city => (
        <option key={city.id} value={city.name}>
            {city.name}
        </option>
    ))
    return (
        props.results.length !== 0
        ? <select id="suggestionsList" onChange={(e) => props.getUserChoice(e)} required value="none">
            <option value="none" disabled>Please choose a city</option>
            {options}
        </select>
        : null
    )
}

export default Suggestions;