// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhJxbFoxGjIfX-wJWwp-cYCVJ1SCfcK70",
  authDomain: "ai-travel-planner-a2e8d.firebaseapp.com",
  projectId: "ai-travel-planner-a2e8d",
  storageBucket: "ai-travel-planner-a2e8d.firebasestorage.app",
  messagingSenderId: "942614198751",
  appId: "1:942614198751:web:03d9dcfae3cbefc182ec6a",
  measurementId: "G-6QX1BTH0VS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
