import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCugpTnmH3UYH2Ap6VVhLD2xAKsVbUbP0g",
  authDomain: "bitesizetravelling.firebaseapp.com",
  databaseURL: "https://bitesizetravelling.firebaseio.com",
  projectId: "bitesizetravelling",
  storageBucket: "bitesizetravelling.appspot.com",
  messagingSenderId: "380486021663",
  appId: "1:380486021663:web:68ce5fb90028905a0c1b2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
