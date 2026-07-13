// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortext-ai-6118c.firebaseapp.com",
  projectId: "cortext-ai-6118c",
  storageBucket: "cortext-ai-6118c.firebasestorage.app",
  messagingSenderId: "377883024435",
  appId: "1:377883024435:web:97be1ac1aee8cfda5d5746",
  measurementId: "G-LS0XRXD7H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app)
export const googleProvide= new GoogleAuthProvider()