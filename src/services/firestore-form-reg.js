// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBpmgoxk9kRD8FalCKHg8Vule9aQwS-OhQ",

  authDomain: "form-register-proy4.firebaseapp.com",

  projectId: "form-register-proy4",

  storageBucket: "form-register-proy4.appspot.com",

  messagingSenderId: "576153066233",

  appId: "1:576153066233:web:8b5c5f2202cb6fe67ca028"

};


// Initialize Firebase

initializeApp(firebaseConfig);

export const db1 = getFirestore();