// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeFEf-Fr6IYx3bO1wI4CIUfh3ccBfXKG8",
  authDomain: "photofy-6539b.firebaseapp.com",
  projectId: "photofy-6539b",
  storageBucket: "photofy-6539b.appspot.com",
  messagingSenderId: "67985753656",
  appId: "1:67985753656:web:81d60b3a580c3dc0c548cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app