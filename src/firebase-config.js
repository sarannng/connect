// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxv0M3-WBLTvfhN2OjRhLmj1ZNFsZ7g78",
  authDomain: "connect-82642.firebaseapp.com",
  projectId: "connect-82642",
  storageBucket: "connect-82642.appspot.com",
  messagingSenderId: "390937928160",
  appId: "1:390937928160:web:78ba5557c9f163efd3cb85",
  measurementId: "G-29FEHGN22N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =   getFirestore(app);