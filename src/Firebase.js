// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCPUdPqTc6tc_1cPeyIOn7ZV0MdmP8efvc",
  authDomain: "q-blog-9406b.firebaseapp.com",
  projectId: "q-blog-9406b",
  storageBucket: "q-blog-9406b.appspot.com",
  messagingSenderId: "855742565831",
  appId: "1:855742565831:web:979617fe53a0c40b255de2",
  measurementId: "G-XN8YWZX52C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db