// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8c991.firebaseapp.com",
  projectId: "mern-blog-8c991",
  storageBucket: "mern-blog-8c991.appspot.com",
  messagingSenderId: "1019734361636",
  appId: "1:1019734361636:web:77490237e41580fcfffab1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
