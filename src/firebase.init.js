// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkyTCx4vn_Yblm_GGU-1BngaKLOP9O9DU",
  authDomain: "professional-photographe-a64a3.firebaseapp.com",
  projectId: "professional-photographe-a64a3",
  storageBucket: "professional-photographe-a64a3.appspot.com",
  messagingSenderId: "122283416917",
  appId: "1:122283416917:web:88941f9d4c6d6a06e123dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(auth);

export default auth;