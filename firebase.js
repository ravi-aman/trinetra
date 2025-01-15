// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOzQFtQXP7X3SG-iMmYotiqykxi60fx6A",
  authDomain: "trinetraatech.firebaseapp.com",
  projectId: "trinetraatech",
  storageBucket: "trinetraatech.firebasestorage.app",
  messagingSenderId: "502661266968",
  appId: "1:502661266968:web:6ef21b230191951ed18d6d",
  measurementId: "G-XVWTKJGTMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);