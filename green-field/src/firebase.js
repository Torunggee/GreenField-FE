// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCezuziDz2gG0uxfq3daYAinqcGQMTgdps",
    authDomain: "green-field-383aa.firebaseapp.com",
    projectId: "green-field-383aa",
    storageBucket: "green-field-383aa.appspot.com",
    messagingSenderId: "712903897144",
    appId: "1:712903897144:web:fbefc9bbe44adf2192f6cd",
    measurementId: "G-D9VBMN6FNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);