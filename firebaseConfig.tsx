// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVlRg0TCSbXzFJ7fn4OJ6undZXg-sQXzE",
  authDomain: "appartmentfinder-expo.firebaseapp.com",
  databaseURL: "https://appartmentfinder-expo-default-rtdb.firebaseio.com",
  projectId: "appartmentfinder-expo",
  storageBucket: "appartmentfinder-expo.firebasestorage.app",
  messagingSenderId: "756585134968",
  appId: "1:756585134968:web:9ad75a38ea44016afd268d",
  measurementId: "G-65GDCYVDYE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };