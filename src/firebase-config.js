// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy40J8aEyqe86CS4xV3QScKMrzMU4W_uA",
  authDomain: "connect-2bbb2.firebaseapp.com",
  projectId: "connect-2bbb2",
  storageBucket: "connect-2bbb2.appspot.com",
  messagingSenderId: "960235731813",
  appId: "1:960235731813:web:9ea4d87f07cc800db13f8c",
  measurementId: "G-RNGELZ1HN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =   getFirestore(app);