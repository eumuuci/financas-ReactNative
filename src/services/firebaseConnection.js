import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBXb5f2irzZYgCp-NMFmqfJSE6wLWbpJLg",
    authDomain: "financas-ff328.firebaseapp.com",
    databaseURL: "https://financas-ff328-default-rtdb.firebaseio.com",
    projectId: "financas-ff328",
    storageBucket: "financas-ff328.appspot.com",
    messagingSenderId: "328852877321",
    appId: "1:328852877321:web:ffd9a1f854900206ffc8d8",
    measurementId: "G-C33ENZP9G4"
  };
  if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }




  export default firebase;
