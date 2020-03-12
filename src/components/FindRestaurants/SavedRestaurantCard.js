import React from "react";

function SavedRestaurantCard(props) {

    const copyOfSavedRestaurants = [...props.restaurants];
    return (
      copyOfSavedRestaurants.map((item, index) => {
        return (
          <div className="cardSection" key={index}>
            <div className="card">
              <button className="closeCard" onClick={(e) => { props.removeRestaurantFromList(item) }}><i className="fas fa-times"></i></button>
              {item.featuredImg !== ""
              ? <img src={item.featuredImg} alt={item.name} />
              : <img src={require("../../assets/placeholder.png")} alt="no image available" />}
              <p><span className="restaurantTitle restaurantName">{item.name}</span> - {item.cuisineType}</p>
              <p>{item.cuisineType}</p>
              <address>
                <p>{item.address}</p>
                <p>{item.phoneNumber}</p>
              </address>
              <p>Average cost for two: ${item.avgCostForTwo}</p>
              <p>{item.rating}</p>
            </div>
            
          </div>
        )
      })
    )
}

export default SavedRestaurantCard;