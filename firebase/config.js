import AsyncStorage from "@react-native-async-storage/async-storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6e1z5th7Kur-XNZKDSbj3cvWCbbOi2bI",
  authDomain: "react-native-app-gora.firebaseapp.com",
  projectId: "react-native-app-gora",
  storageBucket: "react-native-app-gora.appspot.com",
  messagingSenderId: "578206358452",
  appId: "1:578206358452:web:8a2bca96122a083b54f0e1",
  measurementId: "G-LPH4N1HJP5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
