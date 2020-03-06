import React, { Component } from 'react';

class SavedCard extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {}
    }
  }

  removeList = (id) => {
    Swal.fire({
      title: 'Remove restaurant',
      text: 'Are you sure you want to remove this restaurant?',
      confirmButtonColor: '#E7635D',
      cancelButtonColor: '#EDEDC3',
      showCancelButton: true,
      confirmButtonText: 'yes'
    }).then(result => {
      if (result.value) {
        const dbRef = firebase.database().ref();
        dbRef.child(id).remove();
        Swal.fire('Removed', 'The restaurant has been removed');
      }
    });
  }

  render() {
    return (
      <div className="Card">
        <img src="" alt="" />
        <p>Restaurant Name</p>
        <p>Type of cuisine</p>
        <address>
          <p>123 Sample St</p>
          <p>City, State</p>
          <p>Phone #</p>
          <a href="#">Website</a>
        </address>
        <p>Price for two: $20</p>
        <p>Rating: 5</p>
        {/* click to add to saved restaurants list. THe icon will change to a checkmark */}
        <button>Add to list</button>
      </div>
    )
  }
}

export default SavedCard