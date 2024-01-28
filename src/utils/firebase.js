// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfXKw6d7zhFqi92zYZGL0CG6MsR7kUMws",
  authDomain: "netflixgpt-5782f.firebaseapp.com",
  projectId: "netflixgpt-5782f",
  storageBucket: "netflixgpt-5782f.appspot.com",
  messagingSenderId: "558515631687",
  appId: "1:558515631687:web:27245301b1a8f8e3f56362",
  measurementId: "G-W4DL0Y10SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();