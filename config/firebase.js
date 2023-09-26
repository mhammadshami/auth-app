// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCrye34ZBn8DlMRnLB6gWUHpXnP0V4CjQ4",
  authDomain: "expensify-3d41b.firebaseapp.com",
  projectId: "expensify-3d41b",
  storageBucket: "expensify-3d41b.appspot.com",
  messagingSenderId: "116223973309",
  appId: "1:116223973309:web:4f94ded1afd98b9f3d24d4",
  measurementId: "G-ZWVJLC8RFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;
