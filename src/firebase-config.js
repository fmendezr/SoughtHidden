// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-U1dS7RMm0P4pRSXrbgdyxO6A_Unqt8g",
  authDomain: "star-tagging.firebaseapp.com",
  projectId: "star-tagging",
  storageBucket: "star-tagging.appspot.com",
  messagingSenderId: "845494932206",
  appId: "1:845494932206:web:2dccce2963bbf0143ed9ff",
  measurementId: "G-CFF85DE7QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
