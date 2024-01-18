// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXWSQs37qSBqaXa6zN7J7KZ9gYBCNEtEQ",
  authDomain: "netflixgpt-10840.firebaseapp.com",
  projectId: "netflixgpt-10840",
  storageBucket: "netflixgpt-10840.appspot.com",
  messagingSenderId: "361478530754",
  appId: "1:361478530754:web:82b3676a1592041f397d5b",
  measurementId: "G-HC05R1WWRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()