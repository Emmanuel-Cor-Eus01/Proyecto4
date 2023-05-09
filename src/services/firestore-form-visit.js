// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig2 = {

    apiKey: "AIzaSyD1Ut8c2Lf5BtYY3mxZ6nyZR9izDX7H2Lg",

    authDomain: "form-visit-proy4.firebaseapp.com",

    projectId: "form-visit-proy4",

    storageBucket: "form-visit-proy4.appspot.com",

    messagingSenderId: "63168514685",

    appId: "1:63168514685:web:e0ed9469c5ff52b018ff14"

};


// Initialize Firebase

initializeApp(firebaseConfig2);

export const db2 = getFirestore();