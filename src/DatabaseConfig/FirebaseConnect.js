
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHOsAaLee-N9U7qnt0Eq5mKA1ZsROquWc",
  authDomain: "clonechattingapp.firebaseapp.com",
  projectId: "clonechattingapp",
  storageBucket: "clonechattingapp.appspot.com",
  messagingSenderId: "457222329387",
  appId: "1:457222329387:web:07220f2caf66ff2d42866e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// initialize database
export const database = getDatabase(app);
//console.log("successfully connected");
