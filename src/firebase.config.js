import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDni0dVyrpGNdGgA5Y5WoMBvwwzOxwX0gQ",
  authDomain: "cakbank-ae708.firebaseapp.com",
  projectId: "cakbank-ae708",
  storageBucket: "cakbank-ae708.appspot.com",
  messagingSenderId: "547169585150",
  appId: "1:547169585150:web:4620a02999e895394ca2af"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app