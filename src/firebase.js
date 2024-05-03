import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdmDk-5PRKpBQdb4qR0jI-jcFtwrOGCzo",
  authDomain: "chatc-a8231.firebaseapp.com",
  projectId: "chatc-a8231",
  storageBucket: "chatc-a8231.appspot.com",
  messagingSenderId: "321540737718",
  appId: "1:321540737718:web:e02c37cad1132d0175f417"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()