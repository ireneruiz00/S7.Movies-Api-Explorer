// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDItTJIoEvYI5sxPg-wbfi0q7KiehielEU",
  authDomain: "s7-movies-api-explorer.firebaseapp.com",
  projectId: "s7-movies-api-explorer",
  storageBucket: "s7-movies-api-explorer.firebasestorage.app",
  messagingSenderId: "292982955814",
  appId: "1:292982955814:web:38382f16ba7cf7c3876be7",
  measurementId: "G-YM88WG28F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);