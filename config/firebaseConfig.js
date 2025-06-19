// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "ai-room-design1.firebaseapp.com",
  projectId: "ai-room-design1",
  storageBucket: "ai-room-design1.firebasestorage.app",
  messagingSenderId: "777624826708",
  appId: "1:777624826708:web:877677756cb307b6b38ec1",
  measurementId: "G-YKCJH1CRVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)