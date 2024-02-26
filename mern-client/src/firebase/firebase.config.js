// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGINOwJlKuhrsLiDPzcdIOl14VEt3Evs4",
  // authDomain: "mern-book-inventory-f7ecf.firebaseapp.com",
  authDomain: "https://e-book-knng.vercel.app",

  projectId: "mern-book-inventory-f7ecf",
  storageBucket: "mern-book-inventory-f7ecf.appspot.com",
  messagingSenderId: "53135275793",
  appId: "1:53135275793:web:a6be0b9089cdcc17de7eb0",
  measurementId: "G-CPWC2CDVLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
