// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt_wtUhqN1gaKFA9UJjEz6_w9D5s7rICA",
  authDomain: "simple-firebase-a70c5.firebaseapp.com",
  projectId: "simple-firebase-a70c5",
  storageBucket: "simple-firebase-a70c5.firebasestorage.app",
  messagingSenderId: "694096843479",
  appId: "1:694096843479:web:f85c964c40d98b36a15692",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
