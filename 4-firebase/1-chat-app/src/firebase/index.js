import { initializeApp } from "firebase/app";
//! auth import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//! database import
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Q7orIeR8jhsLSm6xwaZe-ovRUdFfvPw",
  authDomain: "hs-chat-20024.firebaseapp.com",
  projectId: "hs-chat-20024",
  storageBucket: "hs-chat-20024.firebasestorage.app",
  messagingSenderId: "732606214046",
  appId: "1:732606214046:web:501a44e68746bebf46f08f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! auth servisi kurulum
export const auth = getAuth(app);

//! google sağlayıcı kurulum
export const provider = new GoogleAuthProvider();

//! firestore servisi kurulum
export const db = getFirestore(app);
