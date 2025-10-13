// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFPJVGjVaqeMUxp0kwS9TO73lahVqpm-A",
  authDomain: "tasks-96162.firebaseapp.com",
  projectId: "tasks-96162",
  storageBucket: "tasks-96162.firebasestorage.app",
  messagingSenderId: "123731653569",
  appId: "1:123731653569:web:45dc70e4a93b2443c0b540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);