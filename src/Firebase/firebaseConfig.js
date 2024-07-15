import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAzEmCH2y-olyRupwkO_q-0CvbzE7URhY",
  authDomain: "foody-bef5c.firebaseapp.com",
  projectId: "foody-bef5c",
  storageBucket: "foody-bef5c.appspot.com",
  messagingSenderId: "93176504216",
  appId: "1:93176504216:web:bd81410a93cd67aa3055ed",
  databaseURL: "https://foody-bef5c-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
