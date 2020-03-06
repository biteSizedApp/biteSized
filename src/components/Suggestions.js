import React from 'react'



const Suggestions = (props) => {
    const options = props.results.map(city => (
        <option key={city.id} value={city.name}>
            {city.name}
        </option>
    ))

    return (
        props.results.length !== 0
        ? <select onChange={(e) => props.getUserChoice(e)} required defaultValue="none">
            <option value="none" disabled>Please choose a city</option>
            {options}
        </select>
        : null
    )
}

export default Suggestions;