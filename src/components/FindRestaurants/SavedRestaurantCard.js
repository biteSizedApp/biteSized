import React from 'react';

function SavedRestaurantCard(props) {

    const copyOfSavedRestaurants = [...props.restaurants];
    return (
<<<<<<< HEAD
      copyOfSavedRestaurants.map((item, index) => {
        return (
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
            
            {/* click to add to saved restaurants listThe icon will change to a check mark */}
            <button onClick={(e) => { props.removeRestaurantFromList(item) }}><i className="fas fa-plus" aria-hidden></i>remove</button>
          </div>
        )
      })
=======
      <div className="cardSection">
        <div className="card">
          {/* click to add to saved restaurants listThe icon will change to a check mark */}
          <button id="closeCard" onClick={(e) => { this.props.removeRestaurantFromList(e, this.state.restaurant) }}><i id="close" className="fas fa-times"></i></button>
          {this.state.restaurant.featuredImg !== ""
          ? <img src={this.state.restaurant.featuredImg} alt={this.state.restaurant.name} />
          : <img src={require('../../assets/placeholder.png')} alt="no image available" />}
          <p>{this.state.restaurant.name}</p>
          <p>{this.state.restaurant.cuisineType}</p>
          <address>
            <p>{this.state.restaurant.address}</p>
            <p>{this.state.restaurant.phoneNumber}</p>
          </address>
          <p>Average cost for two: ${this.state.restaurant.avgCostForTwo}</p>
          <p>{this.state.restaurant.rating}</p>
        </div>
      </div>
>>>>>>> henry/yourTripStyling
    )
}

export default SavedRestaurantCard;