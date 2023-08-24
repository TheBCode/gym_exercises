// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC28XDoWaXvREbnM6_rbBcZ3K3Ji0uApA",
    authDomain: "exerciseapp-817f6.firebaseapp.com",
    projectId: "exerciseapp-817f6",
    storageBucket: "exerciseapp-817f6.appspot.com",
    messagingSenderId: "685411775936",
    appId: "1:685411775936:web:1a2fed0ee302f66849c425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
