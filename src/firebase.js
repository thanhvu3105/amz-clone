// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDr3OsfCdUcx8CYr3xOFu_rPOLbGykXhaI",
  authDomain: "clone-vu.firebaseapp.com",
  projectId: "clone-vu",
  storageBucket: "clone-vu.appspot.com",
  messagingSenderId: "477243092820",
  appId: "1:477243092820:web:87425b33a674f04222a2c1",
  measurementId: "G-44VYKXQTB0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth };