import React from 'react'

const Suggestions = (props) => {
    const options = props.results.map(city => (
        <option key={city.id}>
            {city.name}
        </option>
    ))
    return (
        props.results.length !== 0
        ? <select>{options}</select>
        : null
    )
}

export default Suggestions;