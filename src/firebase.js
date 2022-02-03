import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnSqXLC7_nLRyFjgJ17YWqghASdsprtLU",
    authDomain: "scl018-burger-queen.firebaseapp.com",
    projectId: "scl018-burger-queen",
    storageBucket: "scl018-burger-queen.appspot.com",
    messagingSenderId: "364736745111",
    appId: "1:364736745111:web:b857bd1113e09c528863d2",
    measurementId: "G-PHZ563H5WJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;