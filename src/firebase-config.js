// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore"
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

//async function uploadData () {
//    const mapsRef = collection(db, "maps");
//
//    await setDoc(doc(mapsRef, "hell&Heaven"), {
//        characters: {0: [2, 126], 1: [52, 65], 2: [91, 43]},
//        leaderboard: [],
//    });
//    await setDoc(doc(mapsRef, "whiteNoise"), {
//        charactetrs: {0: [56, 5], 1: [19, 65], 2: [91,43]},
//        leaderboard: []
//    });
//    await setDoc(doc(mapsRef, "supes"), {
//        characters: {0: [17, 30], 1: [78, 13], 2: [65, 138]},
//        leaderboard: []
//    })
//}