import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBokrUYrIzBx2sB0dfUih1FD2kRK7-IN6M",
    authDomain: "geo-ninjas-7c6eb.firebaseapp.com",
    databaseURL: "https://geo-ninjas-7c6eb.firebaseio.com",
    projectId: "geo-ninjas-7c6eb",
    storageBucket: "",
    messagingSenderId: "508836072792"
  };

  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()