// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv-YourKey",
  authDomain: "healthmobile.firebaseapp.com",
  projectId: "healthmobile-17275",
  storageBucket: "healthmobile.appspot.com",
  messagingSenderId: "1000090783125",
  appId: "1:1000090783125:web:abcdefg"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
