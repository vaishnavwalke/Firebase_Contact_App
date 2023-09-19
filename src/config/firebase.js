// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDrk_8Vhzg0mov7ERuEti5QNu5Dm0W-Us",
  authDomain: "vite-contact-fa658.firebaseapp.com",
  projectId: "vite-contact-fa658",
  storageBucket: "vite-contact-fa658.appspot.com",
  messagingSenderId: "529853826146",
  appId: "1:529853826146:web:1a438eb33b948a1db0fd3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
