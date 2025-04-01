import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

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

export { auth };
