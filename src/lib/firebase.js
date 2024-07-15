import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-78c61.firebaseapp.com",
  projectId: "react-chat-app-78c61",
  storageBucket: "react-chat-app-78c61.appspot.com",
  messagingSenderId: "52000681086",
  appId: "1:52000681086:web:0f0cd83b6a49b67fb5fc2f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)