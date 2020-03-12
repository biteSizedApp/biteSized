import React from 'react';

function SavedRestaurantCard(props) {

    const copyOfSavedRestaurants = [...props.restaurants];
    return (
      copyOfSavedRestaurants.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.featuredImg} alt={item.name}></img>
            <p>{item.name}</p>
            <p>{item.cuisineType}</p>
            <address>
              <p>{item.address}</p>
              <p>{item.phoneNumber}</p>
            </address>
            <p>Average cost for two: ${item.avgCostForTwo}</p>
            <p>{item.rating}</p>

            {/* click to add to saved restaurants listThe icon will change to a check mark */}
            <button onClick={(e) => { props.removeRestaurantFromList(item) }}><i className="fas fa-plus" aria-hidden></i>remove</button>
          </div>
        )
      })
    )
}

export default SavedRestaurantCard;