// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVlElqitOr3qaGUvN5fNAc4XsZlNF-VuA",
    authDomain: "ppml-f682a.firebaseapp.com",
    databaseURL: "https://ppml-f682a.firebaseio.com",
    projectId: "ppml-f682a",
    storageBucket: "ppml-f682a.appspot.com",
    messagingSenderId: "418786314206",
    appId: "1:418786314206:web:84bbdaeecc76df1781ff4f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { auth };