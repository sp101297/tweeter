// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDutvoKa7LOARwjZk7BjNM4sw8aUZmHPyo",
  authDomain: "twitter-clone-ffcba.firebaseapp.com",
  databaseURL: "https://twitter-clone-ffcba.firebaseio.com",
  projectId: "twitter-clone-ffcba",
  storageBucket: "twitter-clone-ffcba.appspot.com",
  messagingSenderId: "62319513793",
  appId: "1:62319513793:web:371ac7e0893f6b4f8dc440",
  measurementId: "G-V6JVPPD34R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
