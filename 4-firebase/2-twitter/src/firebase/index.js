// firebase uygulmasını başlatma fonksiyon
import { initializeApp } from "firebase/app";

// extra importlar
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// firebase konsol api key bilgileri
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "hs-tw-e3c31.firebaseapp.com",
  projectId: "hs-tw-e3c31",
  storageBucket: "hs-tw-e3c31.firebasestorage.app",
  messagingSenderId: "473063729046",
  appId: "1:473063729046:web:8da5dc7ffce2e290d8dfb7",
};

// firebase kurulum
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google sağlacyısı kurulum
export const googleProvider = new GoogleAuthProvider();
