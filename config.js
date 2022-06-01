import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB9gNyCSNLRl53jlOJOz8wpuAw_DEzAB3M",
    authDomain: "team-voting-70807.firebaseapp.com",
    databaseURL: "https://team-voting-70807-default-rtdb.firebaseio.com",
    projectId: "team-voting-70807",
    storageBucket: "team-voting-70807.appspot.com",
    messagingSenderId: "26575152649",
    appId: "1:26575152649:web:27e0241982539e5c40bad8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();