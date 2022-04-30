import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lucid-tradebook.firebaseapp.com",
  projectId: "lucid-tradebook",
  storageBucket: "lucid-tradebook.appspot.com",
  messagingSenderId: "168032586210",
  appId: "1:168032586210:web:68142244b4a95ac42a11bb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
