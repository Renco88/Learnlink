// Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgrS_8fdtloa20AoJXP8diWKeyfe5aaYQ",
  authDomain: "learnlink-1a548.firebaseapp.com",
  projectId: "learnlink-1a548",
  storageBucket: "learnlink-1a548.firebasestorage.app",
  messagingSenderId: "245795724308",
  appId: "1:245795724308:web:6d6c9c3ff8328b43f25b01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

