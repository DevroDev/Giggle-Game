import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUevRfsCbj5XkTH7KwwNMx4mIIX1TUTd8",
  authDomain: "giggle-news.firebaseapp.com",
  projectId: "giggle-news",
  storageBucket: "giggle-news.appspot.com",
  messagingSenderId: "468126041716",
  appId: "1:468126041716:web:cab16f746defd3602b3321",
  measurementId: "G-YYX33THYPC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
