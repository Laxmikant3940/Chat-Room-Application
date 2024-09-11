// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_wHySIYP3bu1tLQBCM3oCEhq4YKA90U",
  authDomain: "chatapp-42325.firebaseapp.com",
  projectId: "chatapp-42325",
  storageBucket: "chatapp-42325.appspot.com",
  messagingSenderId: "624462595283",
  appId: "1:624462595283:web:0abeaaf2b9c44e55a28026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export  const db = getFirestore(app);