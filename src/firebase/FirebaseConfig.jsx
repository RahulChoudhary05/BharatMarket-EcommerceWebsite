// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVGTFcwwFZBzqE04Clq-R9GIeULObtxCc",
    authDomain: "bharatmarket-613f1.firebaseapp.com",
    projectId: "bharatmarket-613f1",
    storageBucket: "bharatmarket-613f1.appspot.com",
    messagingSenderId: "573309356786",
    appId: "1:573309356786:web:733c4c7b5eb86d290fde6b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }