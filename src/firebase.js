import firebase from 'firebase';
const firebaseApp = firebase.initializeApp(
    {apiKey: "AIzaSyCEh0p3TB6GmF7QuVrWsI1CQmIH-Ze084A",
    authDomain: "clone-instagram-cp.firebaseapp.com",
    projectId: "clone-instagram-cp",
    storageBucket: "clone-instagram-cp.appspot.com",
    messagingSenderId: "153711716268",
    appId: "1:153711716268:web:4e0c6f96c5907b07803c09",
    measurementId: "G-E185F932V4"}
)
const db  = firebaseApp.firestore();
const storage = firebase.storage() ; 
const auth = firebase.auth();
export  {db,auth,storage};

