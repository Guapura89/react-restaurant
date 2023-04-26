// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndXIYR9qBBwnTcX0NylCv4s40sJXp_cg",
  authDomain: "react-restaurant-478d3.firebaseapp.com",
  projectId: "react-restaurant-478d3",
  storageBucket: "react-restaurant-478d3.appspot.com",
  messagingSenderId: "292970995391",
  appId: "1:292970995391:web:482d9ba11f1c744380b00a",
  measurementId: "G-3S9PF29GC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
