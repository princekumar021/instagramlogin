// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration from the user request
const firebaseConfig = {
  apiKey: "AIzaSyBaPuCdflLnZJkpEoEUZ6DTKCcQ9CmdLo4",
  authDomain: "turea-2452b.firebaseapp.com",
  projectId: "turea-2452b",
  storageBucket: "turea-2452b.firebasestorage.app",
  messagingSenderId: "406829970034",
  appId: "1:406829970034:web:807daf84c8b1f8bc5288eb",
  measurementId: "G-TWSJ9LVHX6",
};

// Initialize Firebase
// This pattern prevents re-initializing the app on hot reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
