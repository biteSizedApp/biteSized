import React from 'react';

function SavedRestaurantCard(props) {

    const copyOfSavedRestaurants = [...props.restaurants];
    return (
      copyOfSavedRestaurants.map((item, index) => {
        return (
<<<<<<< HEAD
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
=======
          <div className="cardSection" key={index}>
            <div className="card">
              <button id="closeCard" onClick={(e) => { props.removeRestaurantFromList(item) }}><i className="fas fa-times"></i></button>
              {item.featuredImg !== ""
              ? <img src={item.featuredImg} alt={item.name} />
              : <img src={require('../../assets/placeholder.png')} alt="no image available" />}
              <p><span className="restaurantTitle restaurantName">{item.name}</span> - {item.cuisineType}</p>
              <p>{item.cuisineType}</p>
              <address>
                <p>{item.address}</p>
                <p>{item.phoneNumber}</p>
              </address>
              <p>Average cost for two: ${item.avgCostForTwo}</p>
              <p>{item.rating}</p>
            </div>
            
>>>>>>> a100347b39985770cab0e6a99252434d82a20e2c
          </div>
        )
      })
    )
}

export default SavedRestaurantCard;